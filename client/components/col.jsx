import React from 'react';
import Row from "./row"

class Coloums extends React.Component {
    constructor() {
        super()
        this.state = {
            array=[1,2,3,4,5,6,7]
        }
    }
   
    render() {
        return (
            <div className="container b-1">
                {
                this.state.map(element=>{
                    return 
                })
                }
            </div>
        )
    }
}
export default Col