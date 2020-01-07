import React from 'react'

const AlertBox = a => {
    alert(a)
}

const Arrow_Fun = () => {

    return (
        <div>
            <button type="button" className="btn btn-outline-primary mt-3" onClick={AlertBox.bind(this, "Alert From Array Function")}>Arrow Fun Btn</button>
        </div>
    )
}

export default Arrow_Fun;