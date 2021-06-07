import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
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
        });
      // console.log("NewTripForm / creating new trip!");
    }
  };

  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <form className={classes.root} noValidate autoComplete="off">
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            error={validateForm(formState.tripName)}
            className="location"
            id="outlined-basic"
            label="Trip Name"
            type="text"
            variant="outlined"
            name="tripName"
            value={formState.tripName}
            required
            helperText={!validateForm}
            onChange={handleInputChange}
          />
          <Typography>Start Date</Typography>
          <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="outlined"
            name="start_date"
            inputLabelProps={{
              shrink: true,
            }}
            value={formState.startDate}
            onChange={handleInputChange}
          />
          <Typography>End Date</Typography>
          <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="outlined"
            name="end_date"
            inputLabelProps={{
              shrink: true,
            }}
            value={formState.endDate}
            onChange={handleInputChange}
          />
          <TextField
            error={validateForm(formState.city)}
            className="location"
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            value={formState.city}
            required
            onChange={handleInputChange}
          />
          <TextField
            className="location"
            id="outlined-basic"
            label="State"
            variant="outlined"
            name="state"
            value={formState.state}
            onChange={handleInputChange}
          />
          <TextField
            className="location"
            id="outlined-basic"
            label="Country"
            variant="outlined"
            name="country"
            value={formState.country}
            onChange={handleInputChange}
          />
          <TextField
            className="location"
            id="outlined-basic"
            label="Lodging (url)"
            variant="outlined"
            name="lodging"
            value={formState.url}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Create Trip
          </Button>
        </Grid>
      </form>
      <p style={{ color: "red", padding: "10px" }}>
        * indicates required field
      </p>
    </div>
  );
}
