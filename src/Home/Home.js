import React, { useEffect, useState } from 'react';
import Country from '../Components/Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);

     useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    //https://restcountries.eu/rest/v2
    //https://restcountries.eu/rest/v2/name/{name}
    //By code : https://restcountries.eu/rest/v2/alpha/{code}
    .then(res => res.json())
    .then(data => setCountry(data))

  },[])
    return (
        <div>
            <h4>Country Number: {country.length} </h4>
      {
        country.map(country => <Country country ={country} ></Country> )
      }
        </div>
    );
};

export default Home;