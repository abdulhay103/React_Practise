import React, { Component } from 'react';

export class Bs_Button_Cl extends Component {

    CreatAleart() {
        alert("Clicked From Class!");
    };
    render() {
        return (
            <div>
                <button className="btn btn-warning mt-2" onClick={this.CreatAleart}>Class Alert Button</button>
            </div>
        )
    }
}

export default Bs_Button_Cl;
 