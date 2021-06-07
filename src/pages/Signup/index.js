import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core/";
import { Link, useHistory } from "react-router-dom";
import SplashLogo from "../../components/SplashLogo";
import API from "../../utils/API";
import RallyLogo from "../../assets/RallyLogo.svg";


function Signup() {
  //States for controlling the form content
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const history = useHistory();

  useEffect(() => {
    setUserState({
      token: "",
      user: {
        email: "",
        id: "",
        username: "",
      },
    });
  }, []);

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // console.log("Submitting Form");
    API.createUser(formState)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUserState({
          ...userState,
          token: res.data.token,
          user: {
            firstName: res.data.user.firstName,
            lastName: res.data.user.lastName,
            location: res.data.user.location,
            email: res.data.user.email,
            username: res.data.user.username,
            image: res.data.user.imagePath,
          },
        });
        history.push("/home");

      })
      .catch((err) => {
        switch (err.response.data.err.errors[0].message) {
          case "Validation isEmail on email failed":
            window.alert("Please Enter a Valid Email Address");
            break;
          case "Validation len on password failed":
            window.alert(
              "Please Enter a Password that is 8 characters or more"
            );
            break;
          case "user.email must be unique":
            window.alert("This Email Address is already in use");
            break;
          default:
            break;
        }
      });
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

  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

  return (
    <div>
      <Container maxWidth="md">
        <Box
          paddingTop={50}
          display="flex"
          width="auto"
          height={500}
          justifyContent="center"
          alignItems="center"
          // flexDirection="column"
        >
          <form
            className={classes.root}
            onSubmit={handleFormSubmit}
            fullwidth="true"
            style={{ justifyContent: "center" }}
            display="flex"
            // flexDirection="column"
          >
            <img src={RallyLogo} alt="logo" />

            <TextField
              className={classes.root}
              InputProps={{ className: classes.input }}
              id="outlined-full-width"
              label="First Name"
              variant="filled"
              value={formState.firstName}
              name="firstName"
              onChange={handleInputChange}
              placeholder="First Name"
            />

            <TextField
              className="lastName"
              InputProps={{ className: classes.input }}
              // id="outlined-basic"
              label="Last Name"
              variant="filled"
              value={formState.lastName}
              name="lastName"
              onChange={handleInputChange}
              placeholder="Last Name"
            />

            <TextField
              className="email"
              InputProps={{ className: classes.input }}
              // id="outlined-basic"
              label="Email"
              variant="filled"
              value={formState.email}
              name="email"
              onChange={handleInputChange}
              placeholder="Email"
            />

            <TextField
              className="userName"
              InputProps={{ className: classes.input }}
              // id="outlined-basic"
              label="User Name"
              variant="filled"
              value={formState.username}
              name="username"
              onChange={handleInputChange}
              placeholder="User Name"
            />

            <TextField
              className="password"
              InputProps={{ className: classes.input }}
              // id="outlined-basic"
              label="Password"
              variant="filled"
              value={formState.password}
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              autoComplete="off"
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ minWidth: "100%" }}
              onClick={handleFormSubmit}
            >
              Create Account
            </Button>

            <p style={{ textAlign: "center" }}>or</p>
            <Button
              style={{ width: "100%" }}
              color="default"
              component={Link}
              to={`/login`}
            >
              Login to your account
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Signup;
