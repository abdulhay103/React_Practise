import React, { Component } from 'react';

export class SetState extends Component {

    constructor(){
        super();
        this.state = {
            val : "Love"
        }
    }

    ChangeName = a => {
        this.setState({
            val : a
        })
    }


    render() {
        return (
            <div className="border border-secondary m-4 pb-2">
                <h1 className="mt-3">{this.state.val}</h1>
                <button className="btn btn-primary" onClick={this.ChangeName.bind(this,"Destroy")}>Click To Change This Name!</button>
            </div>
        )
    }
}

export default SetState;
