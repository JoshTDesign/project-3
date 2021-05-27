import React, { useState, useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import LoginForm from '../../components/LoginForm';
import SplashLogo from '../../components/SplashLogo';

function Login() {


    const [formState,setFormState] = useState({
      username:"",
      password:""
    })


    const handleInputChange = event => {
        // setFormState(event.target.value);
      };

      const handleCreateAccount = event => {
          // console.log('create account click');
        //need code
      };


    const handleSubmit = e => {
        e.preventDefault();
        // //need code
        // console.log("username is " + username);
        // console.log("password is " + password);
      };

      return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
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