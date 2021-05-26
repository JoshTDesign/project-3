import React, { Component } from "react";
import Login from "../../pages/Login";
import Signup from "../../pages/Signup";

class LoginSignupContainer extends Component {
    state = {
        currentPage: "Login"
    };

    handlePageChange = page => {
        this.setState({
            currentPage: page
        });
    };

    // TODO: add conditionals for login/no account states
    renderPage = () => {
        if (this.state.currentPage === "Login") {
            return <Login />
        } else {
            return <Signup />
        }
    }

    render() {
        return (
            <div>
                <Login />? <Login /> : <Signup />
            </div>
        )
    }
};

export default LoginSignupContainer; 