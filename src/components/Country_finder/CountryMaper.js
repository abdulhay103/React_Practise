import React, { Fragment } from 'react';
import Spinner from '../Layout/Spinner';
import Country from './Country';

const CountryMaper = ({ countries, loading }) => {
  if (loading) {
    return <Spinner />;
  } else
    return (
      <Fragment>
        {countries.map(country => (
          <Country key={country.id} country={country} />
        ))}
      </Fragment>
    );
};

export default CountryMaper;
