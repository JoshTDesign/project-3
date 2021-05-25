import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline"; // imports a global reset for css styling
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
import AddButton from "../components/AddButton";

export default function Dashboard() {
    return (
        <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box display="flex">
          <h1>Trip Page</h1>
          <Box justifyContent="flex-end">
          <p>start date</p>
          <p>end date</p>
          </Box>
        </Box>
        <Button variant="outlined" color="primary">
          Agenda
        </Button>
        <Button variant="outlined" color="primary">
          Discover
        </Button>
        <Button variant="outlined" color="primary">
          Expenses
        </Button>
      </Container>
      <Container>
        <AddButton />
      </Container>
    </div>
    )
}
