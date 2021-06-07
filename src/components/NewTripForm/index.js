import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Container } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200,
//   },
//   root: {
//     flexGrow: 1,
//     },
//   }),
// )

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

// form validation for required inputs
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
  return valid;
};

export default function NewTripForm(props) {
  const [formState, setFormState] = useState({
    tripName: "",
    city: "",
    state: "",
    country: "",
    start_date: "",
    end_date: "",
    lodgingUrl: "",
    token: "",
    errors: {
      tripName: "",
      city: "",
    },
  });

  // const [userState, setUserState] = useState({
  //   // token: "",
  //   user: {},
  // });

  const history = useHistory();

  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    setFormState({
      ...formState,
      token: token,
    });
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    // console.log("NewTripForm / name,value: ", name, value);

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let tripName = formState.tripName;
    let city = formState.city;
    let errors = formState.errors;

    // form input validation
    if (tripName.length < 1 || city.length < 1) {
      alert("Please complete required fields");
      setFormState({
        errors,
        tripName: "",
        city: "",
      });
    } else {
      // if all input fields are valid, api call to create new trip
      API.createTrip(formState, formState.token)
        .then((res) => {
          setTripState({
            ...tripState,
            userTrips: res.data,
          });
          history.push(`/home`);
        })
        .catch((err) => {
          console.log(err);
        }).then(()=>{
          history.push('/home')
        });
      // console.log("NewTripForm / creating new trip!");
    }
  };

  const classes = useStyles();

  return (
<Container maxWidth="sm">
        <NavBar />

      <form style={{marginTop:'100px'}} className={classes.root} noValidate autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <TextField
            error={validateForm(formState.tripName)}
            className="location"
            id="outlined-basic"
            label="Trip Name"
            type="text"
            variant="filled"
            name="tripName"
            value={formState.tripName}
            required
            helperText={!validateForm}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={6}>
          <Typography>Start Date</Typography>
          <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="filled"
            name="start_date"
            inputLabelProps={{
              shrink: true,
            }}
            value={formState.startDate}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={6}>
          <Typography>End Date</Typography>
          <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="filled"
            name="end_date"
            inputLabelProps={{
              shrink: true,
            }}
            value={formState.endDate}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            error={validateForm(formState.city)}
            className="location"
            id="outlined-basic"
            label="City"
            variant="filled"
            name="city"
            value={formState.city}
            required
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            className="location"
            id="outlined-basic"
            label="State"
            variant="filled"
            name="state"
            value={formState.state}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={6}>
          <TextField
            className="location"
            id="outlined-basic"
            label="Country"
            variant="filled"
            name="country"
            value={formState.country}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={12}>
          <TextField
            className="location"
            id="outlined-basic"
            label="Lodging (url)"
            variant="filled"
            name="lodging"
            value={formState.url}
            onChange={handleInputChange}
            fullWidth='true'
          />
          </Grid>
          <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
            fullWidth='true'
          >
            Create Trip
          </Button>
          </Grid>
        </Grid>
      </form>
      <p style={{ color: "red", padding: "10px" }}>
        * indicates required field
      </p>
    </Container>
  );
}
