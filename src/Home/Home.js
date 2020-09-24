import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Country from '../Components/Country/Country';

const Home = () => {
    const [country, setCountry] = useState([]);
    
    useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all/')
    //https://restcountries.eu/rest/v2
    //https://restcountries.eu/rest/v2/name/{name}
    //By code : https://restcountries.eu/rest/v2/alpha/{code}
    .then(res => res.json())
    .then(data => setCountry(data))

  },[])
    return (
        <div className="App">
 
            <Button variant="outline-info">Country Number: {country.length} </Button>
              {
                country.map(country => <Country country ={country} ></Country> )
                
              }
        </div>
    );
};

export default Home;