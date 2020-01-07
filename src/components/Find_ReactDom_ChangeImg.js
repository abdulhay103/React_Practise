import React, { Component } from 'react';
import reactDom from 'react-dom';
import img_service_1 from '../img/service-1.jpg';
// import img_service_2 from '../img/two.jpg';

export class Find_ReactDom_ChangeImg extends Component {
    
    ImgChanger(){
        var ImgId = document.getElementById("ImgId");
        reactDom.findDOMNode(ImgId).src="http://abdulhay.journeybyweb.com/amazing/wp-content/uploads/2019/12/lient-5.png";
        // reactDom.findDOMNode(ImgId).src={img_service_2};
    }
    render() {
        return (
            <div>
                <img id="ImgId" src={img_service_1}></img><br></br>
                {/* <img id="ImgId" src="http://abdulhay.journeybyweb.com/amazing/wp-content/uploads/2019/12/lient-2.png"></img><br></br> */}
                <button type="button" className="btn btn-secondary mt-2" onClick={this.ImgChanger}>Click For Change Image</button>
            </div>
        )
    }
}

export default Find_ReactDom_ChangeImg;
