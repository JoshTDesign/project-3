import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
import { Link, useLocation } from "react-router-dom";

export default function DashNavBtn(props) {
    const location = useLocation();

  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          style={{ justifyContent: "space-between", padding: 10 }}
        >
          <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Trips")}>
            <Link to="/Dashboard/Trips">Trips</Link>
          </Button>
          <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Discover")}>
            <Link to="/Dasboard/Discover">Discover</Link>
          </Button>
          <Button variant="outlined" color="primary" onClick={() => props.handlePageChange("Expenses")}>
            <Link to="/Dashboard/Expenses">Expenses</Link>
          </Button>
        </Box>
      </Container>
    </div>
  );
}
