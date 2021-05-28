import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import API from "./utils/API"
// import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
// import CreateTrip from "./pages/CreateTrip";
import LoggedInHome from "./pages/LoggedInHome";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trip from "./pages/Trip";
import NewTripForm from "./components/NewTripForm";





function App() {



  return (
    <div>
      {/* <SidebarMenu /> */}
    <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/home" component={LoggedInHome} />
          {/* <Route path="/createtrip" component={CreateTrip} /> */}
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Trips" component={Trip} />
          <Route path="/newtripform" component={NewTripForm} />
        </div>
    </Router>
    {console.log(API.getLatLon("Seattle"))};
    </div>
  );
}


export default App;

