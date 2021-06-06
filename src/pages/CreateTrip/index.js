import React, { Component } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import SidebarMenu from "../../components/SidebarMenu";
import AddButton from "../../components/AddButton";

class CreateTrip extends Component {
  state = {
    addNew: false,
    currentPage: "Dashboard",
  };

  render() {
    return (
      <div>
        <CssBaseline />
        <SidebarMenu />
        <Container maxWidth="sm">
          <AddButton
            addNew={this.state.addNew}
            currentPage={this.state.currentPage}
          />
        </Container>
      </div>
    );
  }
}

export default CreateTrip;
