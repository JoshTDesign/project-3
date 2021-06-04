import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { Card, Chip, Grid } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import API from "../../utils/API";
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

const style = {
  backgroundColor: '#f3f5f9',
  boxShadow: 'none',
  borderRadius: '15px',
  textDecoration: 'none',
  padding: 15,
}

export default function TripBasic(props) {
  // const [state, setState] = useState({
  //   trips: [],
  //   tripsFiltered: [],
  // });
  let tripId = props.link.split("/")[2];
  const history = useHistory();
  const classes = useStyles();

  const [userState, setUserState] = useState({
    token: "",
    username: "",
    first_name: "",
    image_path: "",
  });
  // const handleclick = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.id);
  //   history.push(`/Trip/${event.target.id}/Dashboard/`);
  // };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log(res.data)
          API.getDashboard(res.data.id, token)
          .then(result => { 
            API.getTripUsers(tripId, token)
            .then((newres) => {
          console.log(newres.data);
          // tripUsers = newres.data.Trips;
          // console.log(tripUsers);
            setUserState({
              ...userState,
            token: token,
              username: result.data.username,
              first_name: result.data.first_name,
              image_path: result.data.image_path,
              otherUsers: newres.data.Trips
          });
        })
          })
        })
       
      } else {console.log("no Token found tripbasic")}


  }, []);


  // TODO: fitler on click and render detailed trip card
  //

  // showDetailed = ()

  // render() {
  // const { classes } = this.props;

  return (
    <div>
      <Box p={2}>
        <Card style={style}>
          
          <Grid container  justify="space-between" spacing={2} direction="row">
          
            <Link to={props.link} style={{textDecoration: 'none'}}>
            <Grid item justify="space-around">
              <Typography variant={"h6"} display="inline">
                {props.title}
              </Typography>
              <Typography align="right" display='inline' style={{paddingLeft:"10px"}}>{props.start}</Typography>
            </Grid>
            
            <Grid item xs>
              <div className={classes.root}>

                <Avatar
                alt={userState?.first_name}
                src={userState?.image_path}
                className={classes.purple}>
                    {userState?.first_name.charAt(0).toUpperCase()}
                </Avatar>

                {userState.otherUsers?.map((user, index) => (
                  <Avatar
                  key={index}
                  alt={user.first_name}
                  src={user.image_path}
                  className={classes.orange}>
                    {user.first_name.charAt(0).toUpperCase()}
                  </Avatar>
                ))}
                </div >
            </Grid>
            </Link>

            {/* <Grid xs={3}>
                <Chip
                  label="Delete Trip"
                  clickable
                  color="primary"
                  deleteIcon={<DoneIcon />}
                />
            </Grid> */}
          
        </Grid>
        </Card>
      </Box>
    </div>
  );
  // }
}

// export default withStyles(useStyles)(TripBasic);