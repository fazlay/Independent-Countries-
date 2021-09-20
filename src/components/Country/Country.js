import React from 'react';
import './Country.css';

const Country = (props) => {
  //   const { name, capital } = props;
  console.log(props.name.flag);
  const back = {
    backgroundImage: `url(${props.name.flag})`,
  };
  return (
    <div>
      <div class='wrapper'>
        <div style={back} class='card'>
          <h1>
            <span class='enclosed'>{props.name.name} </span>
            <h4> Capital: {props.name.capital}</h4>
          </h1>
        </div>
      </div>
      {/* <h1>Country Name: {props.name.name}</h1>
      <h4>Country Capital: {props.name.capital}</h4> */}
    </div>
  );
};

export default Country;
