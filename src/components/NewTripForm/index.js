import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";

// TODO: Need to create POST request in form submit handler

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function NewTripForm(props) {
  const [formState, setFormState] = useState({
    tripName: "",
    city: "",
    state: "",
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
        ...formState,
        token: token
    })
  }, []);

  let { id } = useParams();

  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("NewTripForm / formState: ", formState);
    API.createTrip(formState, formState.token).then((res) => {
      setTripState({
        ...tripState,
        userTrips: res.data,
      });
      history.push(`/home`);
    });
    console.log("NewTripForm / creating new trip!");
  };

const classes =useStyles();

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
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="outlined"
            name="startDate"
            inputLabelProps={{ 
                shrink: true
            }}
            value={formState.startDate}
            onChange={handleInputChange}
          />
          <TextField
            className={classes.textField}
            id="date"
            label=""
            type="date"
            variant="outlined"
            name="endDate"
            inputLabelProps={{ 
                shrink: true
            }}
            value={formState.endDate}
            onChange={handleInputChange}
          />
          <TextField
            className="location"
            id="outlined-basic"
            label="City"
            variant="outlined"
            name="city"
            value={formState.city}
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
            label="Country (optional)"
            variant="outlined"
            name="country"
            value={formState.country}
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
