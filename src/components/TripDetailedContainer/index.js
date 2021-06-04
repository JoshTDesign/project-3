import { React, useState, useEffect } from "react";
import {Container} from "@material-ui/core";
import {Accordion} from '@material-ui/core';
import {AccordionSummary} from '@material-ui/core';
import {AccordionDetails} from '@material-ui/core';
import TripDetailed from "../../components/TripDetailed";
import { Card, Box, FormControl, InputLabel, Input, InputAdornment } from "@material-ui/core";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
// import AddActivityModal from "../../components/AddActivityModal";
import { makeStyles } from '@material-ui/core';
import {Modal, Grid, TextField, Button} from '@material-ui/core';


// import AddButton from "../AddButton";

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
    '& .MuiTextField-root': {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: '100%',
      display: "flex",
      flexDirection: "column"
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '20px',
  },
  input: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    height: "50px"
  },
  Button: {
    maxWidth: '500px',
  },
}));

export default function TripDetailedContainer(props) {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });
  let { id } = useParams();
  console.log(id)

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
    tripId: id,
  });

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const deleteActivity = (event) => {
    let thisId = event.target.parentElement.id
    console.log(thisId)
    console.log('delete event function / activity id is:' + thisId + ' user id is:'+userState.user.id)
    API.deleteActivity(thisId, userState.user.id, userState.token).then(res=>{
      API.getActivityById(id, userState.token).then(result=>{
        console.log(result.data.activities)
        setTripState({
          trip: result.data.activities,
        })
      console.log('API req sent // ',res.data)
  }).catch(err=>{
    console.log(err)
  })
})
}
const history = useHistory();


  const createActivity = () => {
    console.log('create event function / trip id is:'+ id +' user id is:'+userState.user.id)
    console.log(formState)
    API.createActivity(formState, userState.token).then(res=>{
      API.getActivityById(id, userState.token).then(result=>{
        console.log(result.data.activities)
        setTripState({
          trip: result.data.activities,
        })
      console.log('API req sent // ',res.data)
  }).catch(err=>{
    console.log(err)
  })
}).then(handleClose)
}


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
        })
        .then(
          API.getActivityById(id, token).then((res) => {
            console.log('TripDetailedContainer / res.data: ', res.data)
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

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Add activity</h2>
      <p id="simple-modal-description">
        Add an activity to your agenda
      </p>
      {/* <AddActivityModal /> */}
      <form 
        className={classes.root} 
        onSubmit={createActivity}
        fullWidth={true}
        style={{justifyContent:'center'}}
        display="flex"
        flexDirection="column"
        >
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <TextField 
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        className="activityName" 
                        id="outlined-full-width"
                        name="activityName"
                        label="Activity Name"
                        variant="filled" 
                        size="small"
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        className="activityDescription" 
                        id="outlined-full-width"
                        name="description"
                        label="Activity Description"
                        variant="filled" 
                        size="small"
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        className="address" 
                        id="outlined-full-width"
                        name="address"
                        label="Activity Address"
                        variant="filled" 
                        size="small"
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        className="actUrl" 
                        id="outlined-basic" 
                        name="activityUrl"
                        label="URL (optional)" 
                        variant="filled" 
                        type="url"
                        size="small"
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        className="category" 
                        id="outlined-basic" 
                        name="category"
                        label="Category" 
                        variant="filled" 
                        size="small"
                        onChange={handleInputChange} 
                    />
                    <FormControl fullWidth className={classes.margin}>
                      <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
                      <Input
                        className={classes.root}
                        InputProps={{className: classes.input}}
                        id="outlined-adornment-amount"
                        name="cost"
                        type="number"
                        variant="filled"
                        size="small" 
                        onChange={handleInputChange} 
                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                      />
                    </FormControl>
                    <TextField
                      className={classes.textField}
                      id="date"
                      label=""
                      type="date"
                      variant="outlined"
                      name="activity_date"
                      inputLabelProps={{
                        shrink: true,
                      }}
                      value={formState.startDate}
                      size="small"
                      onChange={handleInputChange}
                    />
                     <TextField
                      id="startTime"
                      label="Start Time"
                      type="time"
                      name="start_time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                      onChange={handleInputChange}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                    <TextField
                      id="endTime"
                      label="End Time"
                      type="time"
                      name="end_time"
                      defaultValue="07:30"
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      size="small"
                      onChange={handleInputChange}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                    />
                    

                    <Button variant="filled" color="primary" onClick={createActivity}>
                            <p>create activity</p>                  
                    </Button>
                </Grid>
            </form>
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
                  <button type="button" onClick={handleOpen}>
                    Add to my agenda
                  </button>
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
                  openActivity={(e)=>{console.log('clicked')}}
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
