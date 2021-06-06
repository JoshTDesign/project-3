import React from "react";
import { Box, Typography } from "@material-ui/core";

const styles = {
  backgroundColor: "#333333",
  color: "white",
  position: "fixed",
  bottom: "25px",
};

export default function NextEvent(props) {
  return (
    <div style={styles}>
      <Box p={2}>
        <Typography>
          <h3>{props.event}</h3>
          <p>{props.time}</p>
        </Typography>
      </Box>
    </div>
  );
}
