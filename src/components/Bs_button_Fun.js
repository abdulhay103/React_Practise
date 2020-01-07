import React from 'react'

function Bs_button_Fun() {

    function CreatAleart(){
        alert("This is Click From Function!");
    }

    return(
        <div>
            <button className="btn btn-warning mt-2" onClick={CreatAleart}>Fun Alert Button</button>
        </div>
    );
}

export default Bs_button_Fun;
