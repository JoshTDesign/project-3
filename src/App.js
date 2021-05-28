import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import API from "./utils/API"
// import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
// import CreateTrip from "./pages/CreateTrip";
import LoggedInHome from "./pages/LoggedInHome";
import Dashboard from "./pages/Dashboard";
import Discover from "./pages/Discover";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
// import Agenda from "./pages/Agenda";
import Expenses from "./pages/Expenses";
import NewTripForm from "./components/NewTripForm";
// import MenuBar from "./components/MenuBar";
import SidebarMenu from "./components/SidebarMenu";
// import DashNavBtn from "./components/DashNavBtn";
import Agenda from "./pages/Agenda";







function App() {

  return (
    <div>
      {/* <SidebarMenu /> */}
    <Router>
        <div>
          <SidebarMenu />
          {/* <DashNavBtn /> */}
          <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <LoggedInHome />
          </Route>
          {/* <Route path="/createtrip" component={CreateTrip} /> */}
          <Route exact path="/Trip/:id/Dashboard">
            <Dashboard />
            <Agenda />
          </Route>
          {/* TODO: do we want this to be same as dashboard or have a different view? */}
          <Route exact path={`/Trip/:id/Dashboard/Agenda`}>
            <Dashboard />
            <Agenda />
          </Route>
          <Route exact path="/Trip/:id/Dashboard/Discover/">
            <Dashboard />
            <Discover />
          </Route>
          <Route exact path="/Trip/:id/Dashboard/Expenses/">
            <Dashboard />
            <Expenses />
          </Route>
          <Route exact path="/newtripform">
            <NewTripForm />
          </Route>
          </Switch>
        </div>
    </Router>
   
    </div>
  );
}


export default App;

