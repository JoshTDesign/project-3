import React from 'react'
import { Link, useLocation } from "react-router-dom";
import SplashLogo from '../../components/SplashLogo';
import Grid from '@material-ui/core/Grid';
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SignupForm(props) {
    return (
        <div>
            <SplashLogo />

            <form className="test" noValidate autoComplete="off">
            <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                <TextField className="userName" id="outlined-basic" label="User Name" variant="outlined" onClick={props.handleInputChange} />
                <TextField className="password" id="outlined-basic" label="Password" variant="outlined" onClick={props.handleInputChange} />
                <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>Create Account</Button>
                <p>or</p><Button variant="outlined" color="primary">
                            <Link to="/">
                                Login
                            </Link>
                        </Button>
            </Grid>
            </form>
        </div>
    )
}
