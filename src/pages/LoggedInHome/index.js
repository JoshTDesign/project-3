import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";
import Box from "@material-ui/core/Box";
import SidebarMenu from "../../components/SidebarMenu";

export default function LoggedInHome() {
  return (
    <div>
      <SidebarMenu />
      <Box display="flex" style={{ justifyContent: "center", padding: 10 }}>
        <h1>My Trips</h1>
      </Box>
      <Container maxWidth="sm">
        <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
          {/* <TripBasic /> */}
          <TripBasic />
          {/* {props.children} */}
          <AddButton style={{ justifyContent: "flex-end" }} />
        </Paper>
      </Container>
    </div>
  );
}
