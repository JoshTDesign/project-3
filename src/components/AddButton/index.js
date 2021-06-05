import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const btnStyle = {
  position: "fixed",
  bottom: "15px",
  right: "15px",
};
export default function AddButton(props) {
  return (
    <>
      <Fab
        style={btnStyle}
        color="primary"
        aria-label="add"
        component={Link}
        to="/newTripForm"
      >
        <AddIcon />
      </Fab>
    </>
  );
}
