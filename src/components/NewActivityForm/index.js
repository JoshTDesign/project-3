import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import {
  Button,
  TextField,
  FormControl,
  Typography,
  InputLabel,
  Input,
  Grid,
  InputAdornment,
} from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core";


const containerStyle = {
  backgroundColor: "white",
  height: "80vh",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderRadius: 0,
  color: "#333333",
  padding: 15,
};

const style = {
  backgroundColor: "white",
  boxShadow: "none",
  borderRadius: "15px",
  textDecoration: "none",
};

const btnStyle = {
  position: "fixed",
  bottom: "15px",
  right: "15px",
};

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(0),
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    position: "absolute",
    // width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "20px",
  },
  input: {
    backgroundColor: "primary",
  }
  
}));

export default function NewActivityForm(props) {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });
  let { id } = useParams();
  
  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });

  const [formState, setFormState] = useState({
    activityName: "",
    description: "",
    address: "",
    activityUrl: "",
    category: "",
    cost: "",
    activity_date: "",
    start_time: "",
    end_time: "",
    token: "",
    UserId: "",
    tripId: "",
  });

  // const [activityState, setActivityState] = useState({
  //   activity: [],
  //   userActivity: [],
  // });

  const history = useHistory();

  const classes = useStyles();

  const createActivity = () => {
    API.createActivity(formState, userState.token)
      .then((res) => {
        API.getActivityById(id, userState.token)
          .then((result) => {
            console.log(result.data.activities);
            setTripState({
              trip: result.data.activities,
            });
            console.log("API req sent // ", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
  };

  //Takes care of getting and saving the existing token
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log(res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              username: res.data.username,
            },
          });
        }).then(()=>{
          setFormState({
            ...formState,
            token: token,
            UserId: userState.user.id //adds browser saved token to formState
          });
          console.log(formState.UserId)
        })
  }
 }, []);

  //fired on every keystroke
  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    // console.log(name, value);
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();

  //   // console.log("NewActivityForm / formState: ", formState);
  //   API.createActivity(formState, formState.token).then((res) => {
  //     setActivityState({
  //       ...activityState,
  //       userActivity: res.data,
  //     });
  //       console.log(res.data);
  //     //   history.push(history);
  //   });
  //   console.log("NewActivityForm / creating new activity!");
  // };

  return (
    <div className={classes.paper}>
      <Typography style={{marginTop:'100px'}}variant="h6" id="simple-modal-title">
        Add an activity to your agenda
      </Typography>

      <form className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
            className={classes.root}
            InputProps={{ className: classes.input }}
            // className="activityName"
            id="outlined-full-width"
            name="activityName"
            label="Activity Name"
            variant="filled"
            size="small"
            required="true"
            onChange={handleInputChange}
            fullWidth='true'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={classes.root}
            InputProps={{ className: classes.input }}
            // className="activityDescription"
            id="outlined-full-width"
            name="description"
            multiline
            rowsMax={4}
            label="Activity Description"
            variant="filled"
            size="small"
            onChange={handleInputChange}
            fullWidth='true'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
            className={classes.root}
            InputProps={{ className: classes.input }}
            // className="address"
            id="outlined-full-width"
            name="address"
            label="Activity Address"
            variant="filled"
            size="small"
            onChange={handleInputChange}
            fullWidth='true'
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
            className={classes.root}
            InputProps={{ className: classes.input }}
            // className="actUrl"
            id="outlined-basic"
            name="activityUrl"
            label="URL (optional)"
            variant="filled"
            type="url"
            size="small"
            onChange={handleInputChange}
            fullWidth='true'

            />
          </Grid>
          {/* <Grid item xs={6}>
            <TextField
            className={classes.root}
            InputProps={{ className: classes.input }}
            // className="category"
            id="outlined-basic"
            name="category"
            label="Category"
            variant="filled"
            size="small"
            onChange={handleInputChange}
            fullWidth='true'

            />
          </Grid> */}
          <Grid item xs={6}>
            <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
            <Input
              type="number" setp="any"
              className={classes.root}
              InputProps={{ className: classes.input }}
              id="outlined-adornment-amount"
              name="cost"
              // type="number"
              variant="filled"
              size="small"
              onChange={(event) => setFormState(parseInt(event.target.value))}
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              fullWidth='true'
            />
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="filled"
            name="activity_date"
            required="true"
            inputLabelProps={{
              shrink: true,
            }}
            value={formState.startDate}
            size="small"
            onChange={handleInputChange}
            fullWidth='true'
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
            id="startTime"
            label="Start Time"
            type="time"
            name="start_time"
            required="true"
            defaultValue="07:30"
            className={classes.textField}
            fullWidth='true'
            variant='filled'
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 300, // 5 min
            }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
            id="endTime"
            label="End Time"
            type="time"
            name="end_time"
            defaultValue="07:30"
            className={classes.textField}
            fullWidth='true'
            variant="filled"
            InputLabelProps={{
              shrink: true,
            }}
            size="small"
            onChange={handleInputChange}
            inputProps={{
              step: 300, // 5 min
            }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" fullWidth='true' color="primary" onClick={createActivity}>
            <p>create activity</p>
            </Button>
          </Grid>
        </Grid>
      </form >
    </div>
  );
}
