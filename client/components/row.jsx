import React from 'react';
import ReactDOM from 'react-dom';
import Square from './square.jsx';

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            array:[0,1,2,3,4,5,6]
        }
    }
   
    render() {
        return (
            <div className="row">
                 {
                this.state.array.map(element=>{
                    return <Square key={element} id={element+this.props.id*7} handleClick={this.props.handleClick}/>
                })
                }
            </div>
        )
    }
}
export default Row