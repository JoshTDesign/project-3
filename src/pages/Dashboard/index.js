import React, { Component } from "react";
// import Container from "@material-ui/core/Container";
import DashNavBtn from "../../components/DashNavBtn";
import TripHeader from "../../components/TripHeader";
// import MultiContainer from "../../components/MultiContainer";
import SidebarMenu from "../../components/SidebarMenu";
import Trips from "../../pages/Trips";
import Discover from "../../pages/Discover";
import Expenses from "../../pages/Expenses";
import DiscoverContainer from "../../components/DiscoverContainer";

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
    console.log('state:', this.state)
    
    if (this.state.currentPage === "Trips") {
      return <Trips />;
    } else if (this.state.currentPage === "Discover") {
      return <Discover />;
    } else if (this.state.currentPage === "Expenses") {
      return <Expenses />;
    } else {
      return <Trips />
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
        {this.state.currentPage === "Discover" ? <Discover /> : <div></div>}
      </div>
    );
  }
}

export default Dashboard;
