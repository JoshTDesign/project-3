import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core/';
import {Grid} from '@material-ui/core/';
import {TextField} from '@material-ui/core/';
import {Link} from '@material-ui/core/';
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

        //TODO: should create axios request for user login when form submits
        console.log("logging in");
    
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        setFormState({
          firstName: "",
          lastName: ""
        }, [])
        location.reload();
      }

      return (
        <div>
            <Container maxWidth="sm">
                <SplashLogo />
                <div>
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">

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
                      variant="contained" 
                      color="primary" 
                      onClick={handleFormSubmit}>
                        <Link to="/dashboard">
                            Login
                        </Link>
                    </Button>

                     <p>or</p>

                    <Button variant="outlined" color="primary">
                        <Link to="/signup">
                            Create Account
                        </Link>
                    </Button>

                </Grid>
            </form>
        </div>
            </Container>
        </div>
      )
}

export default Login;


// return (
//   <div>
//     <p>
//       Hello {this.state.firstName} {this.state.lastName}
//     </p>
//     <form className="form">
//       <input
//         value={this.state.firstName}
//         name="firstName"
//         onChange={this.handleInputChange}
//         type="text"
//         placeholder="First Name"
//       />
//       <input
//         value={this.state.lastName}
//         name="lastName"
//         onChange={this.handleInputChange}
//         type="text"
//         placeholder="Last Name"
//       />
//       <button onClick={this.handleFormSubmit}>Submit</button>
//     </form>
//   </div>
// );
// }
// }
