import React from 'react'
import { Link } from "react-router-dom";
import {Grid} from '@material-ui/core';
import {TextField} from "@material-ui/core";
import {Button} from "@material-ui/core";





export default function NewExpenseForm(props) {
    return (
        <div>
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <h2>Add new expense</h2>
                    <TextField className="expenseName" id="outlined-basic" label="Expense Name" variant="outlined" onClick={props.handleInputChange} />
                    <TextField className="expenseAmount" id="outlined-basic" label="Expense Amount" variant="outlined" onClick={props.handleInputChange} />
                    
                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="#">
                                Add cost to your ledger
                            </Link>
                    </Button>

                    <Button variant="contained" color="primary" onSubmit={props.handleSubmit}>
                            <Link to="#">
                                Split cost among group
                            </Link>
                    </Button>


                </Grid>
            </form>
        </div>
    )
}