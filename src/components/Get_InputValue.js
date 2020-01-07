import React, { Component } from 'react'

export default class Get_InputValue extends Component {

    state = {
        username: ""
    }

    onChangeHandler = e => {
        let getname = e.target.name
        let getvalue = e.target.value
        this.setState({
            [getname]: getvalue
        })
    }

    onSubmitHandler = () =>{
        alert(this.state.username)
    }

    render() {
        return (
            <div className="border border-secondary m-5 pb-2">
                <form onSubmit={this.onSubmitHandler.bind(this)}>
                    <h3>What is happening!</h3>
                    <p>{this.state.username}</p>
                    <input
                    onChange={this.onChangeHandler.bind(this)}
                    name="username"
                    type="text"
                    placeholder="What Will Be Happening!"
                    /><br/>
                    <input
                     type="submit" 
                     value="Submit"
                     className="m-3"/>
                </form>
            </div>
        )
    }
}
