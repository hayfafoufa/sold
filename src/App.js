import React from 'react';
import './App.css';
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>

          <div className="container">
            <Route path="/SignIn" exact component={SignIn} />
            <Route path="/Register/" component={Register} />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
