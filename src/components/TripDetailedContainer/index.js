import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TripDetailed from "../../components/TripDetailed";

export default function TripDetailedContainer() {
  return (
    <div>
      <Container maxWidth="sm">
        <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
          <TripDetailed />
          {/* <AddButton style={{ justifyContent: "flex-end" }} /> */}
        </Paper>
      </Container>
    </div>
  );
}
