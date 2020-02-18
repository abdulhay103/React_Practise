import React, { setState, useState } from 'react';

const SignUp = () => {
  const [fname, setFname] = useState('');
  const [lname, setlname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [inputText, setInputText] = useState('');
  const [users, setUsers] = useState({
    fname: 'mehedi',
    lname: 'haasn',
    phone: '32984799838749',
    email: 'mehe@gmail.com'
  });

  const onChangeHandler = e => {
    setInputText(e.target.value);

    // Validation For First Name
    if (inputText === 'fname') {
      let textPattern = /^([a-zA-Z]){2,30}$/;
      if (!textPattern.test(inputText)) {
        setFname('First Name Is Not Valid!');
      }
    }

    // Validation For Last Name
    if (inputText === 'lname') {
      let textPattern = /^([a-zA-Z]){2,30}$/;
      if (!textPattern.test(inputText)) {
        setlname('Last Name Is Not Valid!');
      }
    }

    // Validation For Phone Number
    if (inputText === 'phone') {
      if (!Number(inputText)) {
        setPhone('Phone Number Is Not Valid!');
      }
    }

    // Validation For Email
    if (inputText === 'email') {
      let textPattern = /\S+@\S+.\S+/;
      if (!textPattern.test(inputText)) {
        setEmail('Email Is Not Valid!');
      }
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const { fname, lname, phone, email } = this.state;
    const newUser = { fname, lname, phone, email };

    setState({
      ...this.state,
      users: [...this.state.users, newUser]
    });
    // console.log(this.state.users)
  };

  usersList = users.map((user, index) => (
    <div key={index}>
      <li>{user.fname}</li>
      <li>{user.lname}</li>
      <li>{user.phone}</li>
      <li>{user.email}</li>
      {/* {console.log(user)} */}
    </div>
  ));

  //console.log(this.state.users)

  return (
    <div className='border border-secondary col-6 offset-3 p-4'>
      <h2>Sign Up Form</h2>
      <h6>
        <span className='text-danger'>First Name:</span> {users.fname}
      </h6>
      <h6>
        <span className='text-danger'>Last Name:</span> {users.lname}
      </h6>
      <h6>
        <span className='text-danger'>Phone No:</span> {users.phone}
      </h6>
      <h6>
        <span className='text-danger'>Email:</span> {users.email}
      </h6>
      <form onSubmit={onSubmitHandler} className='form col-6 offset-3'>
        <input
          onChange={onChangeHandler}
          name='fname'
          type='text'
          placeholder='First Name'
          className='form-control'
        />
        <br />
        <input
          onChange={onChangeHandler}
          name='lname'
          type='text'
          placeholder='Last Name'
          className='form-control'
        />
        <br />
        <input
          onChange={onChangeHandler}
          name='phone'
          type='text'
          placeholder='Phone No'
          className='form-control'
        />
        <br />
        <input
          onChange={onChangeHandler}
          name='email'
          type='text'
          placeholder='Email'
          className='form-control'
        />
        <br />
        <input
          name='submit'
          type='submit'
          value='Sign Up!'
          className='form-control btn btn-success'
        />
      </form>
      <ul>{usersList}</ul>
    </div>
  );
};

export default SignUp;
