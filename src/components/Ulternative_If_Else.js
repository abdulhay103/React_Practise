import React, { Component } from 'react'

export class Ulternative_If_Else extends Component {

    constructor(){
        super()
        this.state = {
            login : true
        }
    }
    render() {
        return (
            this.state.login ? (
                <button type="button" className="btn btn-warning mt-3">Logout?....(Ulternative_If_Else)</button>
            ) :
            (
                <button type="button" className="btn btn-primary mt-3">Login Now ....(Ulternative_If_Else)</button>
            )
        )
    }
}

export default Ulternative_If_Else
