import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";

export default function DashNavBtn() {
  return (
    <div>
      <Container maxWidth="sm">
        <Box
          display="flex"
          style={{ justifyContent: "space-between", padding: 10 }}
        >
          <Button variant="outlined" color="primary">
            Agenda
          </Button>
          <Button variant="outlined" color="primary">
            Discover
          </Button>
          <Button variant="outlined" color="primary">
            Expenses
          </Button>
        </Box>
      </Container>
    </div>
  );
}
