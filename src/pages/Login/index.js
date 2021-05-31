import React, { useState, useEffect, useParams } from 'react'
import { TextField, Box, makeStyles, Button, Container, Typography, TableBody } from '@material-ui/core/';
import { Link, Route } from "react-router-dom";
import SplashLogo from '../../components/SplashLogo';
import API from '../../utils/API';

function Login() {

  //States for controlling the form content
  const [formState,setFormState] = useState({
    username:"",
    password:""
  })

  const [userState,setUserState] = useState({
    token:"",
    user:{

    }
  })

 let id = useParams;
    
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      API.getProfile(token).then(res=>{
        console.log(res.data);
        setUserState({
          token:token,
          user:{
            email:res.data.email,
            id:res.data.id,
            username:res.data.username
          }
        })
    }).catch(err=>{
      console.log("no logged in user")
      setUserState({
        token:"",
        user:{}
      })
    })
  } else {
    console.log("no token provided")
  }
  },[])

    console.log(userState.token)
  //   API.getAllTrips = (useState.token) => {
  //   console.log(res.data);
  // }


  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setFormState({
      ...formState,
      [name]: value
    });
  };
      
  const handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.login(formState).then(res=>{
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      setUserState({
        ...userState,
        token:res.data.token,
        user:{
          email:res.data.user.email,
          username:res.data.user.username,
        }
      })
    }).catch(err=>{
      console.log("error occured")
      console.log(err);
      localStorage.removeItem("token");
    })
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    setFormState({
      firstName: "",
      lastName: ""
    }, [])
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        width: '100%',
        display: "flex",
        flexDirection: "column"
      },
    },
    input: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      // width: '25ch',
      backgroundColor: "white",
      height: "50px"
    },
    Button: {
      // marginLeft: theme.spacing(1),
      // marginRight: theme.spacing(1),
      maxWidth: '500px',
    }

  }));

  const classes = useStyles();

  const bgColor = () => {
    document.body.style.backgroundColor = "#4E4E4E";
  }

  bgColor();

  return (
    <div>
        <Container maxWidth="sm">
          <Box
            paddingTop={15}
            display="flex"
            width="auto"
            height={500}
            justifyContent="center"
          >
          

          <form className={classes.root} onSubmit={handleFormSubmit} fullWidth={true}>
          <SplashLogo />
                  
            <TextField 
              className={classes.root}
              InputProps={{className: classes.input}}
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
              className={classes.root}
              InputProps={{className: classes.input}}
              className="password" 
              id="outlined-basic" 
              label="Password" 
              variant="outlined" 
              value={formState.password}
              name="password"
              type="password"
              onChange={handleInputChange}
              placeholder="Password"
            />

            <Button 
              type="submit"
              variant="contained" 
              color="primary" 
              style={{minWidth: "100%", height:"50px"}}
              onSubmit={handleFormSubmit}
            >
              <Link to="/home">
                Login
              </Link>
            </Button>
            <Typography align="center">
            <p>or</p>
              <Link to="/signup">
                  Create Account
              </Link>
            </Typography>


            </form>

            </Box>

        </Container>
        
    </div>
  )
}

export default Login;

