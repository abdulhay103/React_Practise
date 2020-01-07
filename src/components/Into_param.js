import React, { Component } from 'react'

export class Into_param extends Component {

    AlertBox(a){
        alert(a)
    }
    render() {
        return (
            <div>
                <button className="btn btn-success" onClick={this.AlertBox.bind(this, "I'm From Paramiter" )}>Data Pass Into Paramiter</button>
            </div>
        )
    }
}

export default Into_param
