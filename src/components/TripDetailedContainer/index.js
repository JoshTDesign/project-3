import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TripDetailed from "../../components/TripDetailed";
// import AddButton from "../../components/AddButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/box";
import { Link } from "react-router-dom";
// import AddButton from "../AddButton";

export default function TripDetailedContainer() {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
          <TripDetailed header="test"/>

          <div>
            <Box
              display="flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
              m={2}
            >
              <Fab
                color="primary"
                aria-label="add"
                // onClick={() => props.addNewTrip("CreateTrip")}
                component={Link}
                to="/newactivityform"
              >
                <AddIcon />
              </Fab>
            </Box>
          </div>
          
          {/* <AddButton /> */}
        </Paper>
      </Container>
    </div>
  );
}
