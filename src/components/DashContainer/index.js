import React, { Component } from "react";
import Dashboard from "../../pages/Dashboard";
import Agenda from "../../pages/Agenda";
import Discover from "../../pages/Discover";
import Expenses from "../../pages/Expenses";

class DashContainer extends Component {
    state = {
        currentPage: "Dashboard"
    };

    handlePageChange = page => {
        this.setState({
            currentPage: page
        });
    };
    
    renderPage = () => {
        if (this.state.currentPage === "Dashboard") {
            return <Dashboard />
        } else if (this.state.currentPage === "Agenda") {
            return <Agenda />
        } else if (this.state.currentPage === "Discover") {
            return <Discover />
        } else if (this.state.currentPage === "Expenses") {
            return <Expenses />
        }
    }

}

export default DashContainer;