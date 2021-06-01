import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";

// TODO: Need to create POST request in form submit handler

export default function NewTripForm(props) {
  const [formState, setFormState] = useState({
    tripName: "",
    city: "",
    token: "",
  });

  const [userState, setUserState] = useState({
    // token: "",
    user: {},
  });

  const history = useHistory();

  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });

  useEffect(() => {
      const token = localStorage.getItem("token")
    setFormState({
        token: token
    })
  }, []);

  let { id } = useParams();

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("NewTripForm / formState: ", formState);
    API.createTrip(formState).then((res) => {
      setTripState({
        ...tripState,
        userTrips: res.data,
      });
      history.push(`/Trip/${id}/Dashboard`);
    });
    console.log("NewTripForm / creating new trip!");
  };

  return (
    <div>
      <NavBar />
      <form className="test" noValidate autoComplete="off">
        <Grid container direction="column" justify="center" alignItems="center">
          <TextField
            className="location"
            id="outlined-basic"
            label="Trip Name"
            variant="outlined"
            name="tripName"
            value={formState.tripName}
            onChange={handleInputChange}
          />
          <TextField
            className="date"
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            value={formState.city}
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            color="primary"
            onSubmit={props.handleSubmit}
          >
            <Link to="#">Add team members</Link>
          </Button>

          <Button
            variant="contained"
            color="primary"
            onSubmit={props.handleSubmit}
          >
            <Link to="#">Add photo</Link>
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Create Trip
          </Button>
        </Grid>
      </form>
    </div>
  );
}
