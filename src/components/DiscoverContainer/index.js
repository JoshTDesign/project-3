import {React, useState, useEffect} from "react";
import Container from "@material-ui/core/Container";
import { Link, useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import TripHeader from "../../components/TripHeader";
// import TripDetailed from "../../components/TripDetailed";
import DiscFood from "../../components/DiscFood";
import AddButton from "../../components/AddButton";
import DiscTodo from "../../components/DiscTodo";
import GeoJsonLayer from '../Map/index.js';
import Typography from "@material-ui/core/Typography";
import API from "../../utils/API"

const containerStyle = {
    backgroundColor: "white",
    height: '100vh',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    border: 0,
    color: '#333333',
    padding: 25,
  };
//   const Amadeus = require("amadeus")

  let test = {};
  const Amadeus = require("amadeus")
  const axios = require("axios")

  const amadeus = new Amadeus({
    clientId: "Da21Ae2eHv9GeCs1AfSbCzbNHWp0ArNW!",
    clientSecret: '5w5HxeLoEQzzxcdC!'
});

        let thisLon = "34.0522";
        let thisLat = "118.2437";
        
export default function DiscoverContainer(props) {
    
    /*--------------------------*/
    
    const style = {
        height: '100vh',
    };

    const [userState,setUserState] = useState({
    token:"",
    user:{
    }
    })

    const [tripState, setTripState] = useState({
    trip:[],
    lat:"",
    lon:""
    })

    const [activitiesState, setActivitiesState] = useState({
        activities:[]
    })
    
    
    /*--------------------------*/


    useEffect(()=>{
        const token = localStorage.getItem("token")
        console.log('useEffect1 run')
        
        if(token){
            API.getProfile(token).then(res=>{
              console.log('getting profile', res.data);
              setUserState({
                token:token,
                user:{
                  email:res.data.email,
                  id:res.data.id,
                  username:res.data.username
                }
              })
          }).then(
            API.getTripById(id, token).then(res=>{
              console.log('getting trip:', res.data);
              setTripState({
                ...tripState,
                trip:res.data
              })
              console.log('set trip state:'+ tripState.trip.city);
            })
          )



          
        } else {
          console.log("no token provided")
        }
    },[])

    useEffect(() => {

        API.getLatLon("Seattle").then(res => {
            thisLon = res.data.coord.lon;
            thisLat = res.data.coord.lat;
            console.log('getting lat lon:', thisLon, thisLat)
            setTripState({
                ...tripState,
                lat:thisLat,
                lon:thisLon
            })
        }).then(
            
            amadeus.shopping.activities.get({
                latitude: thisLat,
                longitude: thisLon
            }).then(response => {
                console.log('getting activities', response.data)
                setActivitiesState({
                    activities:response.data
                })
            })
            )
        },[])
        



    const { id } = useParams();



    return (
        <Grid container spacing={3} maxWidth="md" style={containerStyle}>
            <Grid item xs={12}>
            <GeoJsonLayer/>

            </Grid>

            <Grid item xs={12}>
            <h3>Ideas</h3>
            </Grid>

            {/* <p>{{anotherName}}</p> */}
            {activitiesState.activities.map((activity) => (
            <Grid item xs={6}>
            <DiscTodo name={activity.name} pictures={activity.pictures[0]} />
            </Grid>
            ))}
            <AddButton />
        </Grid>
    );
}