import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core/";
import { Grid } from "@material-ui/core/";
import { TextField } from "@material-ui/core/";
import { Link, useHistory } from "react-router-dom";
import SplashLogo from "../../components/SplashLogo";
import API from "../../utils/API";

function Signup() {
  //States for controlling the form content
const history = useHistory();
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

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

  const handleFormSubmit = async (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("Submitting Form");
    API.createUser(formState).then(res => {

      localStorage.setItem("token", res.data.token);
      setUserState({
        ...userState,
        token: res.data.token,
        user: {
          email: res.data.user.email,
          username: res.data.user.username,
        },
      });
        history.push('/home');
    //.then(
    // setFormState(
    //   {
    //     firstName: "",
    //     lastName: "",
    //   },
    //   [])).then(
    //       history.push('/home')
     // )
   }).catch(err=>{
    switch(err.response.data.err.errors[0].message) {
      case("Validation isEmail on email failed"):
      window.alert("Please Enter a Valid Email Address");
      break;
      case("Validation len on password failed"):
      window.alert("Please Enter a Password that is 8 characters or more");
      break;
      case("user.email must be unique"):
      window.alert("This Email Address is already in use");
      break;
    }
   })
  };

  //TODO: should create axios request for user login when form submits
  console.log("creating new user");

  // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs

  return (
    <div>
      <Container maxWidth="sm">
        <div>
          <SplashLogo />

          <form className="test" onSubmit={handleFormSubmit}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <TextField
                className="firstName"
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                value={formState.firstName}
                name="firstName"
                onChange={handleInputChange}
                placeholder="First Name"
              />

              <TextField
                className="lastName"
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={formState.lastName}
                name="lastName"
                onChange={handleInputChange}
                placeholder="Last Name"
              />

              <TextField
                className="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={formState.email}
                name="email"
                onChange={handleInputChange}
                placeholder="Email"
              />

              <TextField
                className="userName"
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                value={formState.username}
                name="username"
                onChange={handleInputChange}
                placeholder="User Name"
              />

              <TextField
                className="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                value={formState.password}
                name="password"
                onChange={handleInputChange}
                placeholder="Password"
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleFormSubmit}
              >
                Create Account
              </Button>

              <p>or</p>
            </Grid>
          </form>
          <Button variant="outlined" color="primary">
            <Link to="/">Log In</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
