// import React, { Component } from "react";
// import Dashboard from "../../pages/Dashboard";
// import Trips from "../../pages/Trips";
// import Discover from "../../pages/Discover";
// import Expenses from "../../pages/Expenses";
// import DashNavBtn from "../../components/DashNavBtn";
// import SidebarMenu from "../../components/SidebarMenu";

// class DashContainer extends Component {
//     state = {
//         currentPage: "Dashboard"
//     };

//     handlePageChange = page => {
//         this.setState({
//             currentPage: page
//         });
//     };
    
//     renderPage = () => {
//         if (this.state.currentPage === "Dashboard") {
//             return <Dashboard />
//         } else if (this.state.currentPage === "Trips") {
//             return <Trips />
//         } else if (this.state.currentPage === "Discover") {
//             return <Discover />
//         } else if (this.state.currentPage === "Expenses") {
//             return <Expenses />
//         }
//     };

//     render() {
//         return (
//             <div>
//                 <SidebarMenu />
//                 <DashNavBtn 
//                 currentPage={this.state.currentPage}
//                 handlePageChange={this.handlePageChange}
//                 />
//                 {this.renderPage()}
//             </div>
//         );
//     }

// }

// export default DashContainer;