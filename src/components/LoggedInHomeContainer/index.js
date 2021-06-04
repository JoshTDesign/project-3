import React from "react";
import {Container} from "@material-ui/core";
import {Paper} from "@material-ui/core";
import {AddButton} from "../../components";
import TripBasic from "../../components/TripBasic";


export default function LoggedInHomeContainer() {
  return (
    <div>
       <Container maxWidth="sm">
        <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
            {/* <TripBasic /> */}
            <TripBasic />
            {/* {props.children} */}
          <AddButton link="/newTripForm"/>
        </Paper>
      </Container>
    </div>
  );
}
