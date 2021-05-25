import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

export default function AddButton() {
  return (
    <div>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
