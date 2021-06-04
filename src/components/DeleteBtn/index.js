import React from "react";
import "./style.css";
import { Chip } from '@material-ui/core';
import {Clear } from '@material-ui/icons';


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
  return (
    <Chip icon={<Clear />} color="primary" {...props} role="button" tabIndex="0">
    </Chip>

  );
}

export default DeleteBtn;
