import React, { Component } from 'react'

export class If_Else_condition extends Component {

    constructor(){
        super()
        this.state = {
            login : true
        }
    }

    render() {
        if (this.state.login==true) {
            return (
                <div>
                    <button type="button" className="btn btn-warning mt-3">logout?...(If_Else_condition)</button>
                </div>
            )
        } else {
            return (
                <div>
                    <button type="button" className="btn btn-success mt-3">Login Now...(If_Else_condition)</button>
                </div>
            )
        }
    }
}

export default If_Else_condition
