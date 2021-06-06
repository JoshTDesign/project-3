import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, IconButton, CardMedia } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import API from "../../utils/API";

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

const style = {
  backgroundColor: "#f3f5f9",
  boxShadow: "none",
  borderRadius: "15px",
  textDecoration: "none",
  padding: 15,
};

export default function TripBasic(props) {
  // const [state, setState] = useState({
  //   trips: [],
  //   tripsFiltered: [],
  // });
  let tripId = props.link.split("/")[2];
  const classes = useStyles();

  // define user state
  const [userState, setUserState] = useState({
    token: "",
    username: "",
    first_name: "",
    image_path: "",
  });

  useEffect(() => {
    // if valid token, api calls to get user info for trips
    const token = localStorage.getItem("token");
    if (token) {
      API.getProfile(token).then((res) => {
        // console.log(res.data)
        API.getDashboard(res.data.id, token).then((result) => {
          API.getTripUsers(tripId, token).then((newres) => {
            // console.log(newres.data);
            // tripUsers = newres.data.Trips;
            // console.log(tripUsers);
            setUserState({
              ...userState,
              token: token,
              username: result.data.username,
              first_name: result.data.first_name,
              image_path: result.data.image_path,
              otherUsers: newres.data.Trips,
            });
          });
        });
      });
    } else {
      console.log("no Token found tripbasic");
    }
  }, []);

  return (
    <div>
      <Box p={2}>
        <Card style={style}>
          <CardMedia image="http://placekitten.com/200/300" />
          <Grid container justify="space-between" spacing={2} direction="row">
            <Link to={props.link} style={{ textDecoration: "none" }}>
              <Grid item justify="space-around">
                <Typography variant={"h6"} display="inline">
                  {props.title}
                </Typography>
                <Typography
                  align="right"
                  display="inline"
                  style={{ paddingLeft: "10px" }}
                >
                  {props.start}
                </Typography>
              </Grid>

              <Grid item xs>
                <div className={classes.root}>
                  <Avatar
                    alt={userState?.first_name}
                    src={userState?.image_path}
                    className={classes.purple}
                  >
                    {userState?.first_name.charAt(0).toUpperCase()}
                  </Avatar>

                  {userState.otherUsers?.map((user, index) => (
                    <Avatar
                      key={index}
                      alt={user.first_name}
                      src={user.image_path}
                      className={classes.orange}
                    >
                      {user.first_name.charAt(0).toUpperCase()}
                    </Avatar>
                  ))}
                </div>
              </Grid>
            </Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                color="primary"
                aria-label="delete card"
                component="span"
                onClick={props.onClick}
              >
                <Delete />
              </IconButton>
            </div>
          </Grid>
        </Card>
      </Box>
    </div>
  );
}
