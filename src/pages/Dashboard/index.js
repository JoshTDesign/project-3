import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
import TripHeader from "../../components/TripHeader";
// import Trips from "../../pages/Trips";
import Agenda from "../Agenda";
import Discover from "../../pages/Discover";
import Expenses from "../../pages/Expenses";

export default function Dashboard() {
  const [state, setState] = useState({
    currentPage: "Dashboard",
    header: "My Trips",
  });

  let { id } = useParams();

  const handlePageChange = (page, header) => {
    setState({
      ...state,
      currentPage: page,
      currentHeader: header,
    });
  };

  const renderPage = () => {
    console.log("state:", state);

    if (state.currentPage === "Agenda") {
      return <Agenda />;
    } else if (state.currentPage === "Discover") {
      return <Discover />;
    } else if (state.currentPage === "Expenses") {
      return <Expenses />;
    } else {
      return <Agenda />;
    }
  };

  return (
    <div>
      {/* <SidebarMenu /> */}
      <TripHeader />
      {/* <DashNavBtn
        currentPage={state.currentPage}
        handlePageChange={handlePageChange}
      /> */}

      <div>
        <Container maxWidth="sm">
          <Box
            display="flex"
            style={{ justifyContent: "space-between", padding: 10 }}
          >
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handlePageChange("Trips")}
            >
              {/* TODO: get id in path */}
              <Link to={`/Trip/${id}/Dashboard/Agenda`}>Agenda</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handlePageChange("Discover")}
            >
              <Link to={`/Trip/${id}/Dashboard/Discover/`}>Discover</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => handlePageChange("Expenses")}
            >
              <Link to={`/Trip/${id}/Dashboard/Expenses/`}>Expenses</Link>
            </Button>
          </Box>
        </Container>
      </div>

      {renderPage()}
      {state.currentPage === "Agenda" ? <Agenda /> : <div></div>}
      {state.currentPage === "Discover" ? <Discover /> : <div></div>}
      {state.currentPage === "Expenses" ? <Expenses /> : <div></div>}
    </div>
  );
}
