import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { createStyles, withStyles  } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
// import ProfileTile from "../../components/ProfileTile";

const useStyles = theme => createStyles({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
});

class TripBasic extends Component {
  state = {
    trips: [],
    tripsFiltered: []
  }

  // TODO: click handle function for trip cards here
  handleClick = event => {
    event.preventDefault();
    
  }

  // TODO: fitler and render detailed trip card 

  // showDetailed = ()


  render() {
    const { classes } = this.props

    return (
      <div>
      <Box p={2}>
        <Card handleClick={this.handleClick}>
          <Typography variant={"h6"} display="inline">
            Trip Name Here!
            <Typography align="right">start date</Typography>
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
        </Card>
      </Box>
    </div>
  );
}
}

export default withStyles(useStyles)(TripBasic);