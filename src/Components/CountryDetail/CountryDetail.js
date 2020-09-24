import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const {countryDetails} = useParams();
    const [country, setCountry] = useState({});
    const {name,capital,region,population,nativeName,flag } = country;

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryDetails}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountry(data[0]));

    }, [])
    return (
        <div>
            <h3>This is details of {countryDetails} </h3>
            <h5>This is : {name} </h5>
            <h6>Capital : {capital} </h6>


        </div>
    );
};

export default CountryDetail;