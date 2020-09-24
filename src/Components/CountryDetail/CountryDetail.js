import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryDetails} = useParams();
    const [country, setCountry] = useState({});
    // const {name,capital,region,population,nativeName,flag } = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data));

    }, [])
    return (
        <div>
            <h3>This is details of {countryDetails} </h3>
            <p>This is : {countryDetails} </p>
            <p>Capital : {country.alpha3Code} </p>
        </div>
    );
};

export default CountryDetail;