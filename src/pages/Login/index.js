import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core/";
import { Link, useHistory } from "react-router-dom";
import RallyLogo from "../../assets/RallyLogo.svg";
import API from "../../utils/API";
// import Background from "../../assets/mountainbg-full.svg"

function Login() {
  //States for controlling the form content
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("token", "");

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
    // console.log("Login / form submit started");
    API.login(formState)
      .then((res) => {
        // console.log("Login / form submitted");
        localStorage.setItem("token", res.data.token);
        setUserState({
          ...userState,
          token: res.data.token,
          user: {
            email: res.data.user.email,
            username: res.data.user.username,
          },
        });
        history.push("/home");
      })
      .catch((err) => {
        window.alert("Incorrect Username or Password");
        // console.log("Login / error occured");
        console.log(err);
        localStorage.removeItem("token");
        history.push("/login");
      })
      .then(
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        setFormState(
          {
            username: "",
            password: "",
          },
          []
        )
      );
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
      <Container maxWidth="md">
        <Box
          paddingTop={25}
          display="flex"
          width="auto"
          height={500}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
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
              // id="outlined-full-width"
              label="User Name"
              variant="filled"
              value={formState.username}
              color="primary"
              name="username"
              onChange={handleInputChange}
              placeholder="User Name"
            />

            <TextField
              className={classes.root}
              InputProps={{ className: classes.input }}
              // id="outlined-full-width"
              label="Password"
              variant="filled"
              value={formState.password}
              name="password"
              type="password"
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
              Login
            </Button>

            <p style={{ textAlign: "center" }}>or</p>

            <Button
              style={{ width: "100%" }}
              color="default"
              component={Link}
              to={`/signup`}
            >
              Create Account
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
