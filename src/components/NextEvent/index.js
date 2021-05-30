import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Box, Typography } from "@material-ui/core";
// import NewTripForm from "../../components/NewTripForm";
import { Link } from "react-router-dom";

const styles = {
  backgroundColor: '#333333',
  color: 'white',
  position: 'fixed',
  bottom: '25px',
}

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
