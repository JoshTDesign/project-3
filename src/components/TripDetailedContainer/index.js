import { React, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import TripDetailed from "../../components/TripDetailed";
import { Card, Box } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API";
import Grid from '@material-ui/core/Grid';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavBar from "../../components/Navbar";

// import AddButton from "../AddButton";

const containerStyle = {
  backgroundColor: "white",
  height: "80vh",
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  borderRadius: 0,
  color: "#333333",
  padding: 15,
};

const style = {
  backgroundColor: "white",
  boxShadow: "none",
  borderRadius: "15px",
  textDecoration: "none",
};

const btnStyle = {
  position: "fixed",
  bottom: "15px",
  right: "15px",
};

export default function TripDetailedContainer(props) {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    trip: [],
    userTrips: [],
  });
  let { id } = useParams();
  // console.log(id);
  const [formState, setFormState] = useState({
    activityName: "",
    category: "",
    url: "",
    token: "",
    UserId: "",
    tripId: id,
  });



  const handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    console.log(name, value)
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const createActivity = id => {
    console.log('create event function / trip id is:'+id +' user id is:'+userState.user.id)
  
    
    API.createActivity(formState, userState.token).then(res=>{
      console.log(formState)
      console.log(userState)
      API.getActivityById(formState.tripId, userState.token).then(result=>{
        console.log(result.data)
        setTripState({
          // ...tripState,
        
          trip: result.data.activities,
        })
    
    }).catch(err=>{
      console.log(err)
    })
  });
  };
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log(res.data);
          setUserState({
            token: token,
            user: {
              email: res.data.email,
              id: res.data.id,
              username: res.data.username,
            },
          });
        })
        .then(
          API.getActivityById(id, token).then((res) => {
            console.log('TripDetailedContainer / res.data: ', res.data)
              setTripState({
                ...tripState,
                trip: res.data.activities,
              });
          })
        )
        .catch((err) => {
          console.log("TripDetailedContainer / no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("TripDetailedContainer / no token provided");
    }
  }, []);

  return (
    <div>
      <Box p={2} style={{ textDecoration: "none", padding: 0 }}>
        <Link
          to={props.link}
          style={{ textDecoration: "none", borderRadius: "none" }}
        >
          <Container maxWidth="md" style={containerStyle}>
            <Card elevation={3} style={style}>
              {tripState.trip.map((trip) => (
                <TripDetailed
                  event={trip.activityName}
                  description={trip.description}
                />
              ))}
            </Card>
          </Container>
        </Link>
      </Box>
      <form className="test" noValidate autoComplete="off">
                <Grid 
                container direction="column"
                justify="center"
                alignItems="center">
                    <h2>Add new activity</h2>
                    <TextField 
                        className="activityName" 
                        id="outlined-basic" 
                        name="activityName"
                        label="Activity Name" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className="category" 
                        id="outlined-basic" 
                        name="category"
                        label="Category" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                    />
                    <TextField 
                        className="actUrl" 
                        id="outlined-basic" 
                        name="url"
                        label="URL (optional)" 
                        variant="outlined" 
                        onChange={handleInputChange} 
                    />
                    

                    <Button variant="contained" color="primary" onClick={createActivity}>
                            {/* <Link to="#">
                                Add activity
                            </Link> */}
                            Create Activity
                    </Button>
                </Grid>
            </form>
    </div>
  );
}
