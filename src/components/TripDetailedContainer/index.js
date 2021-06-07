import { React, useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import TripDetailed from "../../components/TripDetailed";
import {
  Card,
  Box,
  FormControl,
  Typography,
  InputLabel,
  Input,
  InputAdornment,
} from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { makeStyles } from "@material-ui/core";
import { Modal, TextField, Button } from "@material-ui/core";

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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
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
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "20px",
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: "50px",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  Button: {
    maxWidth: "500px",
  },
}));

export default function TripDetailedContainer(props) {
  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });
  let { id } = useParams();

  const [activityName, setActivityName] = useState(null);
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [activityUrl, setActivityUrl] = useState(null);
  const [category, setCategory] = useState(null);
  const [cost, setCost] = useState(0);
  const [activity_date, setActivity_date] = useState(null);
  const [start_time, setStart_time] = useState(null);
  const [end_time, setEnd_time] = useState(null);
  const [token, setToken] = useState("");
  const [UserId, setUserId] = useState("");
  const [TripId, setTripId] = useState("");
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const name = event.target.name;

  //   console.log(name, value);
  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  const deleteActivity = (event) => {
    let thisId = event.target.parentElement.id;
    console.log(thisId);
    console.log(
      "delete event function / activity id is:" +
        thisId +
        " user id is:" +
        userState.user.id
    );
    // api call to delete activity
    API.deleteActivity(thisId, userState.user.id, userState.token).then(
      (res) => {
        API.getActivityById(id, userState.token)
          .then((result) => {
            // console.log(result.data.activities);
            setTripState({
              trip: result.data.activities,
            });
            // console.log("API req sent // ", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };
  const history = useHistory();

  const createActivity = () => {
    console.log(
      "create event function / trip id is:" +
        id +
        " user id is:" +
        userState.user.id
    );

    const newActivity = {
      UserId: userState.user.id,
      activityName: activityName,
      description: description,
      address: address,
      activityUrl: activityUrl,
      category: category,
      cost: cost,
      activity_date: activity_date,
      start_time: start_time,
      end_time: end_time,
      tripId: id,
      token: userState.token,
    };

    console.log(newActivity);

    // api call to create new activity
    API.createActivity(newActivity, userState.token)
      .then((res) => {
        API.getActivityById(id, userState.token)
          .then((result) => {
            console.log(result.data.activities);
            setTripState({
              trip: result.data.activities,
            });
            // console.log("API req sent // ", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .then(formReset());
  };

  const formReset = () => {
    setActivityName(null);
    setDescription(null);
    setAddress(null);
    setActivityUrl(null);
    setCategory(null);
    setCost(0);
    setActivity_date(null);
    setStart_time(null);
    setEnd_time(null);
    setToken("");
    setUserId("");
    setTripId("");

    handleClose();
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          // console.log(res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              username: res.data.username,
            },
          });
        })
        .then(
          API.getActivityById(id, token).then((res) => {
            // console.log("TripDetailedContainer / res.data: ", res.data);
            setTripState({
              ...tripState,
              trip: res.data.activities,
            });
          })
        )
        .catch((err) => {
          console.log("TripDetailedContainer / no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("TripDetailedContainer / no token provided");
    }
  }, []);

  const classes = useStyles();

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Typography variant="h6" id="simple-modal-title">
        Add an activity to your agenda
      </Typography>

      <div>
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
          fullWidth="true"
          onChange={(event) => setActivityName(event.target.value)}
        />
        <TextField
          className={classes.root}
          InputProps={{ className: classes.input }}
          // className="activityDescription"
          id="outlined-full-width"
          name="description"
          label="Activity Description"
          variant="filled"
          size="small"
          fullWidth="true"
          onChange={(event) => setDescription(event.target.value)}
        />
        <TextField
          className={classes.root}
          InputProps={{ className: classes.input }}
          // className="address"
          id="outlined-full-width"
          name="address"
          label="Activity Address"
          variant="filled"
          size="small"
          fullWidth="true"
          onChange={(event) => setAddress(event.target.value)}
        />
      </div>
      <div>
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
          fullWidth="true"
          onChange={(event) => setActivityUrl(event.target.value)}
        />
        <TextField
          className={classes.root}
          InputProps={{ className: classes.input }}
          // className="category"
          id="outlined-basic"
          name="category"
          label="Category"
          variant="filled"
          size="small"
          fullWidth="true"
          onChange={(event) => setCategory(event.target.value)}
        />
        <FormControl fullWidth className={classes.margin}>
          <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
          <Input
            className={classes.root}
            InputProps={{ className: classes.input }}
            id="outlined-adornment-amount"
            name="cost"
            type="number"
            defaultValue="0"
            variant="filled"
            size="small"
            fullWidth="true"
            onChange={(event) => setCost(event.target.value)}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          className={classes.textField}
          id="date"
          label=""
          type="date"
          variant="outlined"
          name="activity_date"
          required="true"
          fullWidth="true"
          inputLabelProps={{
            shrink: true,
          }}
          size="small"
          onChange={(event) => setActivity_date(event.target.value)}
        />
        <Input
          id="startTime"
          label="Start Time"
          type="time"
          name="start_time"
          required="true"
          defaultValue="07:30"
          className={classes.textField}
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          onChange={(event) => setStart_time(event.target.value)}
          inputProps={{
            step: 300, // 5 min
          }}
        />
        <Input
          id="endTime"
          label="End Time"
          type="time"
          name="end_time"
          defaultValue="07:30"
          className={classes.root}
          InputProps={{ className: classes.input }}
          fullWidth="true"
          InputLabelProps={{
            shrink: true,
          }}
          size="small"
          onChange={(event) => setEnd_time(event.target.value)}
          inputProps={{
            step: 300, // 5 min
          }}
        />
      </div>
      <div>
        <Button
          variant="contained"
          fullWidth="true"
          color="primary"
          onClick={createActivity}
        >
          <p>create activity</p>
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Box p={2} style={{ textDecoration: "none", padding: 0 }}>
        <Link
          to={props.link}
          style={{ textDecoration: "none", borderRadius: "none" }}
        >
          <Container maxWidth="md" style={containerStyle}>
            <div>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "20px" }}
                onClick={handleOpen}
              >
                Add to my agenda
              </Button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
              >
                {body}
              </Modal>
            </div>
            <Card elevation={3} style={style}>
              {tripState.trip.map((trip) => (
                <TripDetailed
                  event={trip.activityName}
                  description={trip.description}
                  onClick={deleteActivity}
                  id={trip.id}
                  start_time={trip.start_time}
                  date={trip.date}
                  openActivity={(e) => {}}
                />
              ))}
            </Card>
          </Container>
        </Link>
      </Box>

      {/* Model content */}
    </div>
  );
}
