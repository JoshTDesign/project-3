import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/box";
// import NewTripForm from "../../components/NewTripForm";
import { Link } from "react-router-dom";

const btnStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
}
export default function AddButton() {

  return (
    <>
    <Fab
      style={btnStyle}
      color="primary"
      aria-label="add"
      // onClick={() => props.addNewTrip("CreateTrip")}
      component={Link}
      to="/newactivityform"
    >
      <AddIcon />
    </Fab>
    </>
  );
}
