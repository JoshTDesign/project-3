import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
// import ProfileTile from "../../components/ProfileTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

export default function TripBasic(props) {
  // const [state, setState] = useState({
  //   trips: [],
  //   tripsFiltered: [],
  // });

  const history = useHistory();
  const classes = useStyles();

  const handleclick = (event) => {
    event.preventDefault();
    console.log(event.target.id);
    history.push(`/Trip/${event.target.id}/Dashboard/`);
  };

  // TODO: fitler on click and render detailed trip card
  //

  // showDetailed = ()

  // render() {
  // const { classes } = this.props;

  return (
    <div>
      <Box p={2}>
        <Card>
          <Typography variant={"h6"} display="inline">
            {props.title}
            <Typography align="right">{props.start}</Typography>
          </Typography>

          <div className={classes.root}>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              J
            </Avatar>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            />
            <Avatar src="/broken-image.jpg" />
          </div>
          <button onClick={handleclick} id="1">
            show more
          </button>
        </Card>
      </Box>
    </div>
  );
  // }
}

// export default withStyles(useStyles)(TripBasic);