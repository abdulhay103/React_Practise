import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchCountry = ({ searchCountry }) => {
  const [inputText, setInputText] = useState('');

  const onChangeHandler = e => {
    setInputText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    searchCountry(inputText);
    setInputText('');
  };

  return (
    console.log(inputText),
    (
      <div>
        <form onSubmit={onSubmitHandler} className='form-group py-4'>
          <h2>{inputText}</h2>
          <input
            onChange={onChangeHandler}
            type='text'
            className='form-control'
            placeholder='Sarch a Country'
            name='inputText'
            value={inputText}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-light btn-block'
          />
        </form>
      </div>
    )
  );
};

SearchCountry.PropTypes = {
  searchCountry: PropTypes.func.isRequired
};

export default SearchCountry;
