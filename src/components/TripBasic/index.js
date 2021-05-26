import React from "react";
import Card from "@material-ui/core/Card";
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange } from "@material-ui/core/colors";
// import ProfileTile from "../../components/ProfileTile";

const useStyles = makeStyles((theme) => ({
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
}));

export default function TripBasic() {
  const classes = useStyles();
  return (
    <div>
      <Box p={2}>
        <Card>
          <Typography variant={"h6"} display="inline">
            Trip Name Here!
            {/* <Typography align="right">start date</Typography> */}
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

      <Box p={2}>
        <Card>
          <Typography variant={"h6"} display="inline">
            Seattle, WA
            {/* <Typography align="right">start date</Typography> */}
          </Typography>

          <div className={classes.root}>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              T
            </Avatar>

            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              A
            </Avatar>
            <Avatar
              alt="Remy Sharp"
              src="/broken-image.jpg"
              className={classes.orange}
            >
              J
            </Avatar>
          </div>
        </Card>
      </Box>
    </div>
  );
}
