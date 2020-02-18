import React from 'react';
import PropTypes from 'prop-types';

const Country = ({ country }) => {
  return (
    // console.log(country),
    <div className='card'>
      <div className='row'>
        <div className='col-md-6'>
          <img
            className='card-img-top img-fluid p-3'
            src={country.flag}
            alt={country.name}
          />
        </div>
        <div className='col-md-6'>
          <h1>Name: {country.name}</h1>
          <h2>Capital: {country.capital}</h2>
          <p>Region: {country.region}</p>
          <p>Subregion: {country.subregion}</p>
          <p>Population: {country.population}</p>
          <p>Timezones: {country.timezones}</p>
        </div>
      </div>
    </div>
  );
};

Country.propsTypes = {
  country: PropTypes.object.isRequired
};

export default Country;
