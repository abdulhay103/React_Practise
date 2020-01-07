import React, { Component } from 'react';

export class MyProps extends Component {
    render(props) {
        return (
            <div className= "bg-primary">
                <h2 className= "mt-3 p-2">I Have A Pen Thats Company name is- {this.props.peninfo.company}, color is- {this.props.peninfo.color} and Price is- {this.props.peninfo.price} </h2>
            </div>
        )
    }
}

export default MyProps;
