import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";


export default function LoggedInHomeContainer() {
  return (
    <div>
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
