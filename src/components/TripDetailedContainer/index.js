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
import AddActivityModal from "../../components/AddActivityModal";
import DeleteBtn from "../../components/DeleteBtn"

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

  const deleteActivity = (event) => {
    let thisId = event.target.parentElement.parentElement.id
    console.log(thisId)
    console.log('delete event function / activity id is:'+thisId +' user id is:'+userState.user.id)
    API.deleteActivity(thisId, userState.token).then(res=>{
      console.log('API req sent // ',res.data)
  }).catch(err=>{
    console.log(err)
  })
}


  const createActivity = id => {
    console.log('create event function / trip id is:'+id +' user id is:'+userState.user.id)
    console.log(formState)
    API.createActivity(formState, userState.token).then(res=>{
      console.log(formState)
      console.log(id)
      console.log(res.data)
      API.getActivityById(id, userState.token).then(result=>{
        console.log(result.data)
        setTripState({
          // ...tripState,
        
          trip: result.data.activities,
        })
    
    }).catch(err=>{
      console.log(err)
    })
  }).catch(error=>{
    console.log(error)
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
              <AddActivityModal 
                createActivity={createActivity}
                handleInputChange={handleInputChange}
                />
            <Card elevation={3} style={style}>
              {tripState.trip.map((trip) => (
                <TripDetailed
                  event={trip.activityName}
                  description={trip.description}
                  onClick={deleteActivity}
                  id={trip.id}
                  />
              ))}
            </Card>
          </Container>
        </Link>
      </Box>
      
    </div>
  );
}
