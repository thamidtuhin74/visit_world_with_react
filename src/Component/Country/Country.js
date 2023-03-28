import React from 'react';
import './Country.css'

const Country = (props) => {

    const {name , population, flags , area , region } = props.country;

    return (
        <div className='single-country'>
            <h3>Country Name : {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Population : {population}</h3>
            <h3>Area : {area}</h3>
            <h3>Region : {region}</h3>
            <p>key : {props.country.cca3}</p>

        </div>
    );
};

export default Country;