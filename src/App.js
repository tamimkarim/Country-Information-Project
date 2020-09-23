import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home';
import NoMatch from './NoMatch/NoMatch';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/home">
           <Home></Home>
        </Route>
        <Route exact path="/">
           <Home/>
        </Route>
        <Route path="*">
          <NoMatch/>
        </Route>



      </Switch>
      

    </Router>
  );
}

export default App;
