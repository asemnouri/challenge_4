import React from 'react';
import ReactDOM from 'react-dom';
import Row from "./components/row.jsx"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "red",
            player: "player red time",
            array: [0, 1, 2, 3, 4, 5],
            redArray: [],
            blueArray: [],
            winCombinations: [[0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24], [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20], [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25], [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17], [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10], [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22], [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29], [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16], [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 2], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28], [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]]
        }
    }
    handleClick(id) {
        if (this.state.player != " RED PLAYER WON THE GAME" && this.state.player != " BLUE PLAYER WON THE GAME") {
            (this.state.player === "player red time") ?
                this.setState({ player: "player blue time" })
                :
                this.setState({ player: "player red time" })
            let m = 0
            for (let i = id; i < 42; i += 7) {
                m = i
                let z = i + 7
                if (z < 42) {
                    let element = document.getElementById(`${z}`)
                    if (element.classList.contains("w3-red") || element.classList.contains("w3-blue")) {
                        this.handleColor(i)
                        this.win()
                        return;
                    }
                }
            }
            this.handleColor(m)
            this.win()
        }

    }

    handleColor(i) {

        let element = document.getElementById(`${i}`)
        if (!element.classList.contains("w3-red") && !element.classList.contains("w3-blue")) {
            if (this.state.color === "red") {
                element.classList.add("w3-red")
                this.state.redArray.push(i)
                this.setState({ color: "blue" })
            } else {
                element.classList.add("w3-blue")
                this.state.blueArray.push(i)
                this.setState({ color: "red" })
            }
        }
    }

    win() {
        for (let i = 0; i < this.state.winCombinations.length; i++) {
            let redCounter = 0
            let blueCounter = 0
            for (let j = 0; j < 4; j++) {
                if (this.state.redArray.includes(this.state.winCombinations[i][j])) {
                    redCounter++
                } else if (this.state.blueArray.includes(this.state.winCombinations[i][j])) {
                    blueCounter++
                }
            }
            console.log(redCounter)
            if (redCounter === 4) {
                this.setState({ player: " RED PLAYER WON THE GAME" })
                return
            } else if (blueCounter === 4) {
                this.setState({ player: " BLUE PLAYER WON THE GAME" })
                return
            }
        }
    }
    render() {
        return (
            <div className="container b-1">
                <h3 className="text-center">{this.state.player}</h3>
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
