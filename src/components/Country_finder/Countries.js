import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountryMaper from './CountryMaper';
import SearchCountry from './SearchCountry';

const Countries = () => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getCountris = async () => {
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      setCountries(res.data.slice(0, 10));
      setLoading(false);
    };
    getCountris();
    // eslint-disable-next-line
  }, []);

  const searchCountry = async inputText => {
    setLoading(true);
    const res = await axios.get('https://restcountries.eu/rest/v2/all');
    setCountries(res.data.items);
    setLoading(false);
  };
  return (
    <div className='border border-secondary col-10 offset-1 p-4 my-5'>
      <SearchCountry searchCountry={searchCountry} />
      <CountryMaper countries={countries} loading={loading} />
    </div>
  );
};

export default Countries;
