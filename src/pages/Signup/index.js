import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core/';
import {Grid} from '@material-ui/core/';
import {TextField} from '@material-ui/core/';
import { Link, Route } from "react-router-dom";
import SplashLogo from '../../components/SplashLogo';
import API from '../../utils/API';

function Signup() {

    //States for controlling the form content
    const [formState,setFormState] = useState({
    email:"",
    username:"",
    password:""
    });

    const [userState,setUserState] = useState({
        token:"",
        user:{
    
        }
    });

    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;

        // Updating the input's state
        setFormState({
            ... formState,
            [name]: value
        });
    };

    const handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();

        API.createUser(formState).then(res =>{
            localStorage.setItem("token", res.data.token);
            setUserState({
                ...userState,
                token:res.data.token,
                user:{
                    email:res.data.user.email,
                    username:res.data.user.username,
                    }
            })
        })
    };


    return (
        <div>
            <Container maxWidth="sm">
                <div>
                <SplashLogo />
                <div>{userState.user.username}</div>
                <form className="test" onSubmit={handleFormSubmit}>
                <Grid 
                    container direction="column"
                    justify="center"
                    alignItems="center">

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
                        <Link to="/">
                            Log In
                        </Link>
                    </Button>
                </div>            
        </Container>
        </div>
    )
}

export default Signup;
