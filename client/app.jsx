import React from 'react';
import ReactDOM from 'react-dom';
import Row from "./components/row.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "red",
            player: "player red time",
            array: [0, 1, 2, 3, 4, 5]
        }
    }
    handleClick(id) {
        (this.state.player==="player red time")?
        this.setState({player:"player blue time"})
        :
        this.setState({player:"player red time"})
        let m = 0
        for (let i = id; i < 42; i += 7) {
            m = i
            console.log(i)
            let z = i + 7
            if (z < 42) {
                let element = document.getElementById(`${z}`)
                if (element.classList.contains("w3-red") || element.classList.contains("w3-blue")) {

                    this.handleColor(i)
                    return;
                }
            }

        }
        this.handleColor(m)
        console.log(id)
    }

    handleColor(i) {

        let element = document.getElementById(`${i}`)
        if (!element.classList.contains("w3-red") && !element.classList.contains("w3-blue")) {
            if (this.state.color === "red") {
                element.classList.add("w3-red")
                this.setState({ color: "blue" })
            } else {
                element.classList.add("w3-blue")
                this.setState({ color: "red" })
            }
        }
    }
    render() {
        return (
            <div className="container b-1">
                {
                    this.state.array.map(element => {
                        return <Row key={element} id={element} handleClick={this.handleClick.bind(this)} />
                    })
                }
            </div>

        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;
