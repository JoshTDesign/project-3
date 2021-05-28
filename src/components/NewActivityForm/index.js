import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function NewActivityForm(props) {
    return (
        <div>
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <h2>Add new activity</h2>
                    <TextField className="expenseName" id="outlined-basic" label="Expense Name" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="expenseAmount" id="outlined-basic" label="Expense Amount" variant="outlined" onClick={props.handleInputChange} />
                    
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
