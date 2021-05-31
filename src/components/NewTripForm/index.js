import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";



// TODO: Need to create POST request in form submit handler


export default function NewTripForm(props) {
    return (
        <div>
            <NavBar />
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">

                    <TextField className="location" id="outlined-basic" label="Trip Name" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="date" id="outlined-basic" label="Trip Location" variant="outlined" onClick={props.handleInputChange} />
                    
                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="#">
                                Add team members
                            </Link>
                    </Button>

                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="#">
                                Add photo
                            </Link>
                    </Button>
                    
                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="/dashboard">
                                Create Trip
                            </Link>
                    </Button>


                </Grid>
            </form>
        </div>
    )
}