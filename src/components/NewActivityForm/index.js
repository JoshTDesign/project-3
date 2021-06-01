import React from 'react'
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// TODO: POST req for form submit

export default function NewActivityForm(props) {
    return (
        <div>
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <h2>Add new activity</h2>
                    <TextField className="actName" id="outlined-basic" label="Activity Name" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="actCategory" id="outlined-basic" label="Category" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="actUrl" id="outlined-basic" label="URL (optional)" variant="outlined" onClick={props.handleInputChange} />
                    
                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="#">
                                Add activity
                            </Link>
                    </Button>
                </Grid>
            </form>
        </div>
    )
}
