import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function DashNavBtn() {

    
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          style={{ justifyContent: "space-between", padding: 10 }}
        >
          <Button variant="outlined" color="primary">
            <Link to="/Dashboard/trips">Trips</Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/Dashboard/discover">Discover</Link>
          </Button>
          <Button variant="outlined" color="primary">
            <Link to="/Dashboard/expenses">Expenses</Link>
          </Button>
        </Box>
      </Container>
    </div>
  );
}

export default DashNavBtn;