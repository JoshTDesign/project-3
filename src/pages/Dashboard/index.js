import React, { Component } from "react";
// import Container from "@material-ui/core/Container";
import DashNavBtn from "../../components/DashNavBtn";
import TripHeader from "../../components/TripHeader";
// import MultiContainer from "../../components/MultiContainer";
import SidebarMenu from "../../components/SidebarMenu";
import Trips from "../../pages/Trips";
import Discover from "../../pages/Discover";
import Expenses from "../../pages/Expenses";

class Dashboard extends Component {
  state = {
    currentPage: "Dashboard",
    header: "My Trips",
  };

  handlePageChange = (page, header) => {
    this.setState({
      currentPage: page,
      currentHeader: header,
    });
  };

  renderPage = () => {
    if (this.state.currentPage === "Dashboard") {
      return <Trips />;
    } else if (this.state.currentPage === "Trips") {
      return <Trips />;
    } else if (this.state.currentPage === "Discover") {
      return <Discover />;
    } else if (this.state.currentPage === "Expenses") {
      return <Expenses />;
    }
  };

  render() {
    return (
      <div>
        <SidebarMenu />
        <TripHeader />
        <DashNavBtn
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Dashboard;
