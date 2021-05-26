import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
// import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import CreateTrip from "./pages/CreateTrip";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Trip from "./pages/Trip";
import SidebarMenu from "./components/SidebarMenu";



function App() {
  return (
    <div>
      {/* <SidebarMenu /> */}
    <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/createtrip" component={CreateTrip} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/Trip/:id" component={Trip} />
        </div>
    </Router>
    </div>
  );
}

export default App;
