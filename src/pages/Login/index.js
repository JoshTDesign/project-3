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




    const handleCreateAccount = event => {
        // console.log('create account click');
      //need code
    };

    const handleSubmit = e =>{
      e.preventDefault();
      setFormState({
        email:"",
        password:""
      })
    }

    const handleInputChange = event => {
      // Getting the value and name of the input which triggered the change
      const { name, value } = event.target;
  
      // Updating the input's state
      setFormState({
        [name]: value
      });
    };

      return (
        <div>
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
