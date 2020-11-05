import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            color: "red",
            player: "player red time"
        }
    }
    clickMe(id) {
        (this.state.player==="player red time")?
        this.setState({player:"player blue time"})
        :
        this.setState({player:"player red time"})
        let m = 0
        for (let i = id; i <= 42; i += 7) {
            m = i
            console.log(i)
            let z = i + 7
            if (z <= 42) {
                let element = document.getElementById(`${z}`)
                if (element.classList.contains("w3-red") || element.classList.contains("w3-blue")) {

                    this.colorMe(i)
                    return;
                }
            }

        }

        this.colorMe(m)
    }

    colorMe(i) {

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
                <h3>{this.state.player}</h3>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="1" onClick={() => this.clickMe(1)} ></button>
                    <button className="col-sm w3-circle p-4 m-2" id="2" onClick={() => this.clickMe(2)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="3" onClick={() => this.clickMe(3)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="4" onClick={() => this.clickMe(4)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="5" onClick={() => this.clickMe(5)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="6" onClick={() => this.clickMe(6)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="7" onClick={() => this.clickMe(7)}></button>
                </div>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="8" onClick={() => this.clickMe(8)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="9" onClick={() => this.clickMe(9)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="10" onClick={() => this.clickMe(10)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="11" onClick={() => this.clickMe(11)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="12" onClick={() => this.clickMe(12)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="13" onClick={() => this.clickMe(13)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="14" onClick={() => this.clickMe(14)}></button>
                </div>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="15" onClick={() => this.clickMe(15)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="16" onClick={() => this.clickMe(16)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="17" onClick={() => this.clickMe(17)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="18" onClick={() => this.clickMe(18)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="19" onClick={() => this.clickMe(19)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="20" onClick={() => this.clickMe(20)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="21" onClick={() => this.clickMe(21)}></button>
                </div>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="22" onClick={() => this.clickMe(22)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="23" onClick={() => this.clickMe(23)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="24" onClick={() => this.clickMe(24)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="25" onClick={() => this.clickMe(25)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="26" onClick={() => this.clickMe(26)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="27" onClick={() => this.clickMe(27)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="28" onClick={() => this.clickMe(28)}></button>
                </div>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="29" onClick={() => this.clickMe(29)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="30" onClick={() => this.clickMe(30)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="31" onClick={() => this.clickMe(31)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="32" onClick={() => this.clickMe(32)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="33" onClick={() => this.clickMe(33)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="34" onClick={() => this.clickMe(34)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="35" onClick={() => this.clickMe(35)}></button>
                </div>
                <div className="row">
                    <button className="col-sm w3-circle p-4 m-2" id="36" onClick={() => this.clickMe(36)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="37" onClick={() => this.clickMe(37)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="38" onClick={() => this.clickMe(38)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="39" onClick={() => this.clickMe(39)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="40" onClick={() => this.clickMe(40)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="41" onClick={() => this.clickMe(41)}></button>
                    <button className="col-sm w3-circle p-4 m-2" id="42" onClick={() => this.clickMe(42)}></button>
                </div>
            </div>
        )
    }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
ReactDOM.render(<App />, document.getElementById("app"))
//   export default App;
