import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countires.css';

const Countries = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  //   console.log(country);
  return (
    <div className='container'>
      {country.map((singleCountry) => (
        <Country name={singleCountry} />
      ))}
    </div>
  );
};

export default Countries;
