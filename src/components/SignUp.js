import React, { Component } from 'react'

class SignUp extends Component {
    
    state = {
        fname : "",
        lname : "",
        phone : "",
        email : "",
        users: [
            {fname: 'mehedi', lname: 'haasn', phone: '32984799838749', email:'mehe@gmail.com'}
        ]
    }

    onChangeHandler = e => {
        let textName = e.target.name
        let textValue = e.target.value
        this.setState({
            [textName] : textValue
        })

        // Validation For First Name
        if ( textName==='fname' ) {
            let textPattern =/^([a-zA-Z]){2,30}$/
            if (!textPattern.test(textValue)) {
               this.setState({
                ...this.state,
                fname : "First Name Is Not Valid!"
               }) 
            }
        }

        // Validation For Last Name
        if ( textName==='lname' ) {
            let textPattern =/^([a-zA-Z]){2,30}$/
            if (!textPattern.test(textValue)) {
               this.setState({
                ...this.state,
                lname : "Last Name Is Not Valid!"
               }) 
            }
        }

        // Validation For Phone Number
        if ( textName==='phone' ) {
            let textPattern =/^([a-zA-Z]){2,30}$/
            if (!Number(textValue)) {
               this.setState({
                ...this.state,
                phone : "Phone Number Is Not Valid!"
               }) 
            }
        }

        // Validation For Email
        if ( textName==='email' ) {
            let textPattern =/\S+@\S+.\S+/
            if (!textPattern.test(textValue)) {
               this.setState({
                   ...this.state,
                    email : "Email Is Not Valid!"
               }) 
            }
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const { fname, lname, phone, email } = this.state
        const newUser = {fname, lname, phone, email}

        this.setState({
            ...this.state,
            users:[...this.state.users, newUser]
        })
        // console.log(this.state.users)
    }
    
    usersList = this.state.users.map( (user,index) => (
            <div key={index}>
                <li>{user.fname}</li>
                <li>{user.lname}</li>
                <li>{user.phone}</li>
                <li>{user.email}</li>
                {/* {console.log(user)} */}
            </div>
    ))


    render() {
        console.log(this.state.users)
        return (
            <div className="border border-secondary col-6 offset-3 p-4">
                <h2>Sign Up Form</h2>
                <h6><span className="text-danger">First Name:</span> {this.state.fname}</h6>
                <h6><span className="text-danger">Last Name:</span> {this.state.lname}</h6>
                <h6><span className="text-danger">Phone No:</span> {this.state.phone}</h6>
                <h6><span className="text-danger">Email:</span> {this.state.email}</h6>
                <form onSubmit={this.onSubmitHandler} className="form col-6 offset-3">
                    <input
                        onChange={this.onChangeHandler.bind(this)} 
                        name="fname" type="text" placeholder="First Name" className="form-control"
                    /><br/>
                    <input
                        onChange={this.onChangeHandler.bind(this)} 
                        name="lname" type="text" placeholder="Last Name" className="form-control"
                    /><br/>
                    <input
                        onChange={this.onChangeHandler.bind(this)} 
                        name="phone" type="text" placeholder="Phone No" className="form-control"
                    /><br/>
                    <input
                        onChange={this.onChangeHandler.bind(this)} 
                        name="email" type="text" placeholder="Email" className="form-control"
                    /><br/>
                    <input 
                        name="submit" type="submit" value="Sign Up!" className="form-control btn btn-success"
                    />
                </form>
                <ul>{this.usersList}</ul>
            </div>
        )
    }
}


export default SignUp;