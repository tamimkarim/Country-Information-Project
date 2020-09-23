import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountry(data))

  },[])
  return (
    <div className="App">
      <h4>Country Number: {country.length} </h4>


    </div>
  );
}

export default App;
