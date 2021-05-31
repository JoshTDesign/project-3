import { React, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import AddButton from "../../components/AddButton";
import TripDetailed from "../../components/TripDetailed";
import TripBasic from "../../components/TripDetailed";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Card } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";
import API from '../../utils/API';

// import AddButton from "../AddButton";


const containerStyle = {
  backgroundColor: "white",
  height: '80vh',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  border: '5px',
  color: '#333333',
  padding: 0,
};

const btnStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
}

export default function TripDetailedContainer(props) {
  
const [userState,setUserState] = useState({
  token:"",
  user:{

  }
})

const [tripState, setTripState] = useState({
  trip:[],
  userTrips:[]
})

const { id } = useParams();
// console.log(id);


useEffect(()=>{
  const token = localStorage.getItem("token")

  if(token) {
    API.getProfile(token).then(res=>{
      console.log(res.data);
      setUserState({
        token:token,
        user:{
          email:res.data.email,
          id:res.data.id,
          username:res.data.username
        }
      })
    }).then(
        API.getActivityById(id, token).then(res=>{
          setTripState ({
            ...tripState,
            trip:res.data.activities
          })
        })
    )
    .catch(err=>{
      console.log("no logged in user")
      setUserState({
        token:"",
        user:{

        }
      })
    })
} else {
  console.log("no token provided")
}
},[])



  return (
      <Container maxWidth="md" style={containerStyle}>
      {/* //    <typography>
      //      <h2 style={{margin:0, padding: '15px'}}>{props.city}</h2>
      //    </typography> */}
        <Card elevation={3} variant="outlined" style={{ padding: 10 }}>
          {tripState.trip.map((trip) => (<TripDetailed event={trip.activityName} description={trip.description}/>))}
        </Card>
      </Container>
  );
}

