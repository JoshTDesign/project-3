import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
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
<<<<<<< HEAD
            <Container maxWidth="sm" direction="column">
                <h1>Login Page</h1>
=======
            <Container maxWidth="sm">
                <SplashLogo />
                <LoginForm 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleCreateAccount={handleCreateAccount} />
>>>>>>> 9b3c78e4fa36d69839f2bf43bbe045e9fd0dd64b
            </Container>
        </div>
      )
}

export default Login;