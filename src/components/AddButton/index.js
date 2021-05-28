import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/box";
// import NewTripForm from "../../components/NewTripForm";
import { Link } from "react-router-dom";

export default function AddButton() {

  return (
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
          to="/newtripform"
        >
          <AddIcon />
        </Fab>
      </Box> 
    </div>
  );
}
