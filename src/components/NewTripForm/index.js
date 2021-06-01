import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";
import API from "../../utils/API";



// TODO: Need to create POST request in form submit handler


export default function NewTripForm(props) {
    const [formState, setFormState] = useState({
        tripName: "",
        tripLocation: "",
    });

    const [userState, setUserState] = useState({
        token: "",
        user: {

        }
    })

    

    const [tripState, setTripState] = useState({
        trip: [],
        userTrips: []
    })

    let { id } = useParams();

    const handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        
        API.createTrip(formState).then((res) => {
            setTripState({
                ...tripState,
                userTrips: res.data
            })
        })
       console.log('NewTripForm / creating new trip!')
    }

    return (
        <div>
            <NavBar />
            <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">

                    <TextField className="location" id="outlined-basic" label="Trip Name" variant="outlined" name="tripName" value={formState.tripName} onChange={handleInputChange} />
                    <TextField className="date" id="outlined-basic" label="Trip Location" variant="outlined" name="tripLocation" value={formState.tripLocation} onChange={handleInputChange} />
                    
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
                    
                    <Button variant="contained" color="primary" onSubmit={handleFormSubmit}>
                            <Link to={`/Trip/${id}/Dashboard`}>
                                Create Trip
                            </Link>
                    </Button>


                </Grid>
            </form>
        </div>
    )
}