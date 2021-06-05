import React from "react";
import {Card} from "@material-ui/core";
import {Typography} from "@material-ui/core";
import {Avatar} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core";
// import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function ProfileTile() {
  const classes = useStyles();

  return (
    <div>
      <Box p={2} display="inline">
        <Card>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            className={classes.large}
            />
          <Typography display="inline" variant={"h5"}>Josh Taylor</Typography>
        </Card>
      </Box>
    </div>
  );
}
