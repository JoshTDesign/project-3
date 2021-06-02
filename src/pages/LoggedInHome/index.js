import React, { useState, useEffect } from "react";
import { Container, Card } from "@material-ui/core";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";
import DeleteBtn from "../../components/DeleteBtn";
import Box from "@material-ui/core/Box";
// import SidebarMenu from "../../components/SidebarMenu";
import API from "../../utils/API";
import MenuBar from "../../components/MenuBar";
// import NewTripForm from '../../components/NewTripForm';

export default function LoggedInHome() {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [tripState, setTripState] = useState({
    userTrips: [],
  });

  const getUser = () => {
    const token = localStorage.getItem("token")  
    console.log('LoggedInHome / token: ', token)

      API.getProfile(token).then(res=>{
        console.log('LoggedInHome / res.data: ', res.data);
        setUserState({
          token:token,
          user:{
            email:res.data.email,
            id:res.data.id,
            username:res.data.username
          }
        })
        //hardcoded the user id - need to change
        // console.log('LoggedInHome / userState: ', userState);

        const userId = res.data.id
        console.log('LoggedInHome / userId: ', userId)

        API.getDashboard(userId, token).then(result=>{
          setTripState({
            userTrips:result.data.creator
          })
          console.log('LoggedInHome / res.data: ', result.data)
        })
      })
};

const removeTrip = id => {
  API.deleteTrip(id,userState.token).then(res=>{
    console.log('remove trip worked')
    console.log(res.data)
  })
    
    .catch(err => console.log(err));
};

  // const getDash = () => {
  //   API.getDashboard(userId, token).then(res=>{
  //     setTripState({
  //       userTrips:res.data
  //     })
  //   })
  // }

  
  
  useEffect(()=>{
    // const token = localStorage.getItem("token")  
    // console.log('LoggedInHome / token: ', token)

    // if(token){
    //   API.getProfile(token).then(res=>{
    //     console.log(res.data);
    //     setUserState({
    //       token:token,
    //       user:{
    //         email:res.data.email,
    //         id:res.data.id,
    //         username:res.data.username
    //       }
    //     })
    //     //hardcoded the user id - need to change

        
    //   }).then(
    //     API.getDashboard(userState.user.id, token).then(res=>{
    //       setTripState({
    //         userTrips:res.data
    //       })
    //       console.log('LoggedInHome / userState: ', userState)
    //     })


    //   )
    //   .catch(err=>{
    //     console.log("LoggedInHome / no logged in user")
    //     setUserState({
    //       token:"",
    //       user:{

    //       }
    //     })
    //   })
    // } else {
    //   console.log("LoggedInHome / no token provided")
    // }

    getUser();
  }, []);


  const removeEvent = id => {
    console.log('remove event function / trip id is:'+id +' user id is:'+userState.user.id)
    API.deleteTrip(id, userState.user.id, userState.token).then(res=>{
      console.log(userState.token)
    }).catch(err=>{
      console.log(err)
    }).then(()=>{
      API.getDashboard(userState.user.id, userState.token).then(result=>{
        setTripState({
          userTrips:result.data.creator
        })
      })
    }
    )
  };

  return (
    <div>
      {/* <SidebarMenu /> */}
      <MenuBar />
      <Box display="flex" style={{ justifyContent: "center", padding: 10 }}>
        <h1>{userState.user.username}'s Trips</h1>
      </Box>
      <Container maxWidth="md">
        <Card elevation={3} variant="outlined" style={{ padding: 10 }}>
          {tripState.userTrips.map((trip) => (
            <>
            <TripBasic link={`/trip/`+trip.id+`/dashboard`} title={trip.city} start={trip.start_date}/>
            <DeleteBtn onClick={() => removeEvent(trip.id)} />

            </>
            ))}
          
        <AddButton style={{ justifyContent: "flex-end" }} />
        </Card>
      </Container>
    </div>
  );
}
