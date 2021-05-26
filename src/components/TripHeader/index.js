import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";

export default function TripHeader() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          style={{ justifyContent: "space-between", padding: 10 }}
        >
          <h1>Dashboard Page</h1>
          <Box>
            <p>start date</p>
            <p>end date</p>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
