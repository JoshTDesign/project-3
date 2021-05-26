import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LoginForm from '../../components/LoginForm';
import SplashLogo from '../../components/SplashLogo';

function Login() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();


    const handleInputChange = event => {
        setUsername(event.target.value);
      };

      const handleCreateAccount = event => {
          console.log('create account click');
        //need code
      };


    const handleSubmit = e => {
        e.preventDefault();
        //need code
        console.log("username is " + username);
        console.log("password is " + password);
      };

      return (
        <div>
            <CssBaseline />
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center">
                    <SplashLogo />
                    <LoginForm 
                        handleInputChange={handleInputChange}
                        handleSubmit={handleSubmit}
                        handleCreateAccount={handleCreateAccount} />
            </Grid>
        </div>
      )
}

export default Login;