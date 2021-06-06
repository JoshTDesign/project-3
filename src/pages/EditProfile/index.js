import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  makeStyles,
  Box,
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

  const history = useHistory();

  useEffect(() => {
    userState.token = localStorage.getItem("token");
    // console.log("userstate.token:", userState.token);

    // if valid token, set user state with user info from api call
    if (userState.token) {
      API.getProfile(userState.token)
        .then((res) => {
          // console.log("EditProfile / INITIAL userState: ", res.data);
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
            // console.log("EditProfile / CURRENT userState: ", userState);
          });
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
      history.push("/login");
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log("name: ", name);
    // console.log('value:', value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log("EditProfile / updating profile information");
    // console.log('EditProfile / userState: ', userState);

    // if valid token and changes to input fields, set to new user state
    userState.token = localStorage.getItem("token");
    if (
      formState.first_name ||
      formState.last_name ||
      formState.email ||
      formState.username ||
      formState.location
    ) {
      // console.log('userState: ', userState)
      API.updateProfile(
        {
          id: userState.id,
          first_name: formState.first_name,
          last_name: formState.last_name,
          email: formState.email,
          username: formState.username,
          location: formState.location,
        },
        userState.token
      ).then(() => {
        // console.log('update: ')
        history.push(`/profile/${userState.id}`);
      });
      setUserState({
        first_name: formState.first_name,
        last_name: formState.last_name,
        email: formState.email,
        username: formState.username,
        location: formState.location,
      });
    }
    // console.log('EditProfile / NEW userState: ', userState)
  };

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
    input: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      height: "50px",
    },
    Button: {
      maxWidth: "500px",
    },
  }));

  const classes = useStyles();

  return (
    <div>
      <MenuBar />
      <Container maxWidth="md">
        <Box
          paddingTop={15}
          display="flex"
          width="auto"
          height={500}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography>
            <h3>Update Profile Information</h3>
          </Typography>

          <form
            className={classes.root}
            onSubmit={handleFormSubmit}
            fullWidth={true}
            width="auto"
            style={{ justifyContent: "center" }}
            display="flex"
            flexDirection="column"
          >
            <TextField
              // className={classes.root}
              InputProps={{ className: classes.input }}
              className="first_name"
              id="outlined-full-width"
              variant="filled"
              label="First Name"
              value={formState.first_name}
              name="first_name"
              color="primary"
              placeholder={userState.first_name}
              onChange={(e) =>
                setFormState({ ...formState, first_name: e.target.value })
              }
            />
            <TextField
              // className={classes.root}
              InputProps={{ className: classes.input }}
              className="last_name"
              id="outlined-basic"
              variant="filled"
              label="Last Name"
              value={formState.last_name}
              name="last_name"
              onChange={handleInputChange}
              placeholder={userState.last_name}
            />
            <TextField
              // className={classes.root}
              InputProps={{ className: classes.input }}
              className="email"
              id="outlined-basic"
              variant="filled"
              label="Email"
              value={formState.email}
              name="email"
              onChange={handleInputChange}
              placeholder={userState.email}
            />
            <TextField
              // className={classes.root}
              InputProps={{ className: classes.input }}
              className="username"
              id="outlined-basic"
              variant="filled"
              label="Username"
              value={formState.username}
              name="username"
              onChange={handleInputChange}
              placeholder={userState.username}
            />
            <TextField
              // className={classes.root}
              InputProps={{ className: classes.input }}
              className="location"
              id="outlined-basic"
              variant="filled"
              label="Location"
              value={formState.location}
              name="location"
              onChange={handleInputChange}
              placeholder={userState.location}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ minWidth: "100%" }}
              onClick={handleFormSubmit}
            >
              Update profile
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}
