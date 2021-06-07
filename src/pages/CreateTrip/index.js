import React, { Component, useEffect } from "react";
//import CssBaseline from "@material-ui/core/CssBaseline"; // imports a global reset for css styling
import {Container, CssBaseline } from "@material-ui/core";
import NewTripForm from "../../components/NewTripForm";
import SidebarMenu from "../../components/SidebarMenu";
import AddButton from "../../components/AddButton";
import { useHistory } from "react-router-dom";

  const history = useHistory();
class CreateTrip extends Component {
  state = {
    addNew: false,
    currentPage: "Dashboard"
  };

  // addNewTrip = (event, page) => {
  //   console.log("clickkkk");
  //   event.preventDefault();
  //   this.setState({
  //     addNew: true,
  //     currentPage: page
  //   });
  // };

  // renderNewTripForm = () => {
  //   if (this.state.addNew === true && this.state.currentPage === "Dashboard" || "Trips") {
  //     return <NewTripForm />;
  //   }
    
  // };

  render() {
    return (
      <div>
        <CssBaseline />
        <SidebarMenu />
        <Container maxWidth="sm"
        >
          {/* <h1>Create Trip Page</h1> */}
          <AddButton 
          addNew={this.state.addNew}
          currentPage={this.state.currentPage} 
          // addNewTrip={this.addNewTrip}/>
          />
        {/* {this.renderNewTripForm()} */}
        </Container>
      </div>
    );
  }
}

export default CreateTrip;