import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    location: "",
  });

  const { id } = useParams();

  useEffect(() => {
    userState.token = localStorage.getItem("token");
    if (userState.token) {
      API.getProfile(userState.token)
        .then((res) => {
          console.log("EditProfile / initial userState: ", res.data);
          setUserState({
            id: res.data.id,
            first_name: res.data.first_name,
            last_name: res.data.last_name,
            location: res.data.location,
            username: res.data.username,
            email: res.data.email,
          });

          console.log("EditProfile / CURRENT userState: ", userState);
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

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("EditProfile / updating profile information");

    userState.token = localStorage.getItem("token");
    if(formState.firstName || formState.lastName || formState.email || formState.username || formState.location) {
        API.updateProfile({
            first_name: formState.firstName,
            last_name: formState.lastName,
            email: formState.email,
            username: formState.username,
            location: formState.location
        })
        setUserState({
            first_name: formState.firstName,
            last_name: formState.lastName,
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
                className="firstName"
                id="outlined-basic"
                variant="outlined"
                value={formState.firstName}
                name="firstName"
                placeholder={userState.firstName}
                onChange={handleInputChange}
              />
              <Typography>LastName:</Typography>
              <TextField
                className="lastName"
                id="outlined-basic"
                variant="outlined"
                value={formState.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder={userState.lastName}
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
              <Button onClick={handleFormSubmit} component={Link} to={`/profile/${id}`}>Submit</Button>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
