import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



// TODO: Get links working using react router dom link feature
// TODO: Get form handling to work correctly
// TODO: 


export default function LoginForm(props) {
    return (
        <div>
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">

                    <TextField className="userName" id="outlined-basic" label="User Name" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="password" id="outlined-basic" label="Password" variant="outlined" onClick={props.handleInputChange} />
                    
                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>Log In</Button>

                     <p>or</p>

                    <Button variant="outlined" color="primary">
                        <Link to="/signup">
                            Create Account
                        </Link>
                    </Button>

                </Grid>
            </form>
        </div>
    )
}
