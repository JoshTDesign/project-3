import React from "react";
import  { browserRouter as Router, Route } from "react-router-dom";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import SplashLogo from './components/SplashLogo';
import SignupForm from './components/SignupForm';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
