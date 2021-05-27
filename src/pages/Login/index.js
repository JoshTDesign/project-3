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

      const splashStyle = {
        backgroundColor: '#0c1d33'
      }

      return (
        <div>
            <Container maxWidth="sm" style={splashStyle}>
                <SplashLogo />
                <LoginForm 
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    handleCreateAccount={handleCreateAccount} />
            </Container>
        </div>
      )
}

export default Login;