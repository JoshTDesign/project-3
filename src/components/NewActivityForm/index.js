import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";

export default function NewActivityForm(props) {
  const [formState, setFormState] = useState({
    activityName: "",
    category: "",
    url: "",
    token: "",
  });

  const [userState, setUserState] = useState({
    user: {},
  });

  const history = useHistory();

  const [activityState, setActivityState] = useState({
    activity: [],
    userActivity: [],
  });

  //Takes care of getting and saving the existing token
  useEffect(() => {
    const token = localStorage.getItem("token");
    setFormState({
      ...formState,
      token: token, //adds browser saved token to formState
    });
  }, []);

  //gets the id of the current trip
  // let { id } = useParams();

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

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // console.log("NewActivityForm / formState: ", formState);
    API.createActivity(formState, formState.token).then((res) => {
      setActivityState({
        ...activityState,
        userActivity: res.data,
      });
      //   console.log(res.data);
      //   history.push(history);
    });
    console.log("NewActivityForm / creating new activity!");
  };

  console.log(history);

  return (
    <div>
      <NavBar />
      <form className="test" noValidate autoComplete="off">
        <Grid container direction="column" justify="center" alignItems="center">
          <h2>Add new activity</h2>
          <TextField
            className="activityName"
            id="outlined-basic"
            name="activityName"
            label="Activity Name"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            className="category"
            id="outlined-basic"
            name="category"
            label="Category"
            variant="outlined"
            onChange={handleInputChange}
          />
          <TextField
            className="actUrl"
            id="outlined-basic"
            name="url"
            label="URL (optional)"
            variant="outlined"
            onChange={handleInputChange}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Create Activity
          </Button>
        </Grid>
      </form>
    </div>
  );
}
