import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
// import TripHeader from "../../components/TripHeader";
// import Trips from "../../pages/Trips";
// import Agenda from "../Agenda";
// import Discover from "../../pages/Discover";
// import Expenses from "../../pages/Expenses";

export default function Dashboard() {
  const [state, setState] = useState({
    currentPage: "Dashboard",
    // header: "",
  });

  let { id } = useParams();

  // const handlePageChange = (event, page) => {
  //   setState({
  //     ...state,
  //     currentPage: page,
  //     // currentHeader: header,
  //   });
  // };

  return (
    <div>

      <div>
        <Container maxWidth="sm">
          <Box
            display="flex"
            style={{ justifyContent: "space-between", padding: 10 }}
          >
            <h1>{state.currentPage}</h1>
            <Box>
              <p>start date</p>
              <p>end date</p>
            </Box>
          </Box>
        </Container>
      </div>

      <div>
        <Container maxWidth="sm">
          <Box
            display="flex"
            style={{ justifyContent: "space-between", padding: 10 }}
          >
            <Button
              variant="outlined"
              color="primary"
            >
              <Link to={`/Trip/${id}/Dashboard/Agenda`}>Agenda</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
            >
              <Link to={`/Trip/${id}/Dashboard/Discover`}>Discover</Link>
            </Button>
            <Button
              variant="outlined"
              color="primary"
            >
              <Link to={`/Trip/${id}/Dashboard/Expenses`}>Expenses</Link>
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
}
