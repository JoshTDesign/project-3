import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import MenuBar from "../../components/MenuBar";
import API from "../../utils/API";

export default function EditProfile() {
  const [userState, setUserState] = useState({
    token: "",
    id: "",
    first_name: "",
    last_name: "",
    username: "",
    location: "",
    email: "",
  });

  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    location: "",
  });

  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    userState.token = localStorage.getItem("token");
    console.log('userstate.token:', userState.token)
    
    if (userState.token) {
      API.getProfile(userState.token)
        .then((res) => {
          console.log("EditProfile / INITIAL userState: ", res.data);
          API.getDashboard(res.data.id, userState.token).then((result) => {
              setUserState({
                  id: res.data.id,
                  first_name: result.data.first_name,
                  last_name: result.data.last_name,
                  location: result.data.location,
                  username: result.data.username,
                  email: result.data.email,
                });
              setFormState({
                  first_name: result.data.first_name,
                  last_name: result.data.last_name,
                  location: result.data.location,
                  username: result.data.username,
                  email: result.data.email,
                });
                console.log("EditProfile / CURRENT userState: ", userState);
            })
        })
        .catch((err) => {
          console.log("EditProfile / no user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("EditProfile / no token");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log('value:', value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("EditProfile / updating profile information");
    console.log('EditProfile / userState: ', userState);

    userState.token = localStorage.getItem("token");
    if(formState.first_name || formState.last_name || formState.email || formState.username || formState.location) {
        console.log('userState: ', userState)
        API.updateProfile({
            id: userState.id,
            first_name: formState.first_name,
            last_name: formState.last_name,
            email: formState.email,
            username: formState.username,
            location: formState.location
        }, userState.token)
        .then(() => {
            console.log('update: ')
            history.push(`/profile/${userState.id}`)
        })
        setUserState({
            first_name: formState.first_name,
            last_name: formState.last_name,
            email: formState.email,
            username: formState.username,
            location: formState.location
        })
    }
    console.log('EditProfile / NEW userState: ', userState)
  };

  return (
    <div>
      <MenuBar />
      <Container maxWidth="sm">
        <h1>Update Profile Information</h1>
        <div>
          <form className="test">
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography>First Name:</Typography>
              <TextField
                className="first_name"
                id="outlined-basic"
                variant="outlined"
                value={formState.first_name}
                name="first_name"
                placeholder={userState.first_name}
                onChange={(e) => setFormState({ ...formState, first_name: e.target.value})}
              />
              <Typography>LastName:</Typography>
              <TextField
                className="last_name"
                id="outlined-basic"
                variant="outlined"
                value={formState.last_name}
                name="last_name"
                onChange={handleInputChange}
                placeholder={userState.last_name}
              />
              <Typography>Email:</Typography>
              <TextField
                className="firstName"
                id="outlined-basic"
                variant="outlined"
                value={formState.email}
                name="email"
                onChange={handleInputChange}
                placeholder={userState.email}
              />
              <Typography>Username:</Typography>
              <TextField
                className="firstName"
                id="outlined-basic"
                variant="outlined"
                value={formState.username}
                name="username"
                onChange={handleInputChange}
                placeholder={userState.username}
              />
              <Typography>Location:</Typography>
              <TextField
                className="firstName"
                id="outlined-basic"
                variant="outlined"
                value={formState.location}
                name="location"
                onChange={handleInputChange}
                placeholder={userState.location}
              />
              <Button onClick={handleFormSubmit}>Submit</Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
