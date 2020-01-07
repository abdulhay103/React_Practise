import React, { Component } from 'react';
import MyProps from './MyProps';

export class PropsViewer extends Component {

    render() {
        const info = {
            company: "Matador",
            color  : "Green",
            price  : "Ten taka"
        }
        return (
            <div>
                <MyProps peninfo={info}/>
            </div>
        )
    }
}

export default PropsViewer
