import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import {Button} from '@material-ui/core/';
import {Grid} from '@material-ui/core/';
import {TextField} from '@material-ui/core/';
import {Link} from '@material-ui/core/';
import SplashLogo from '../../components/SplashLogo';
import API from '../../utils/API';

function Login() {


    const [formState,setFormState] = useState({
      username:"",
      password:""
    })

    const [userState,setUserState] = useState({
      token:"",
      user:{
  
      }
    })
  
    useEffect(()=>{
      const token = localStorage.getItem("token")
      API.getProfile(token).then(res=>{
        console.log(res.data);
      })
    },[])


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
        })
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        setFormState({
          firstName: "",
          lastName: ""
        }, [])
      }

      return (
        <div>
            <Container maxWidth="sm">
                <SplashLogo />
                <div>
            <form className="test" onSubmit={handleFormSubmit}>
                {/* <Grid 
                container direction="column"
                justify="center"
                alignItems="center"> */}

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
                      >
                        Login
                    </Button>

                {/* </Grid> */}
            </form>

                     <p>or</p>

                    <Button type="submit" variant="outlined" color="primary">
                        <Link to="/signup">
                            Create Account
                        </Link>
                    </Button>
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
