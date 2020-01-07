import React, { Component } from 'react'

export class Refresh extends Component {

    constructor(){
        super();
        this.Refresher = this.Refresher.bind(this);
    }

    Refresher(){
        this.forceUpdate();
    }
    render() {
        return (
            <div className="border border-secondary m-5 pb-2">
                <h1 className="mt-3">{Math.random()}</h1>
                <button type="button" className="btn btn-danger" onClick={this.Refresher}>Click Me For Refresh</button>
            </div>
        )
    }
}

export default Refresh;
