import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';

const Country = (props) => {
  const {name,population, flag, capital, alpha2Code} = props.country;
  //numericCode is Unique
  
    return (
        <div>
           <div  className="country" >
           <Card style={{ width: '18rem', justifyContent: "left" }}>
           <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>Country Name: {name}</Card.Title>
                <Card.Text>
                Capital : {capital}
                <br/>
                Population : {population}
                
                </Card.Text>
                <Button variant="outline-info"><Link to={`/country/${name}`}>Show details about {name}</Link></Button>
            </Card.Body>
            </Card> 
           </div>


            
        </div>
        
    );
};

export default Country;