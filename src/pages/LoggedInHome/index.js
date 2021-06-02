import React, { useState, useEffect } from "react";
import { Container, Card } from "@material-ui/core";
import AddButton from "../../components/AddButton";
import TripBasic from "../../components/TripBasic";
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
    const token = localStorage.getItem("token");
    console.log("LoggedInHome / token: ", token);

    API.getProfile(token).then((res) => {
      console.log("LoggedInHome / res.data: ", res.data);
      setUserState({
        token: token,
        user: {
          email: res.data.email,
          id: res.data.id,
          username: res.data.username,
        },
      });
      //hardcoded the user id - need to change
      
      const userId = res.data.id;
      console.log("LoggedInHome / userId: ", userId);

      API.getDashboard(userId, token).then((result) => {
        setTripState({
          userTrips: result.data.creator,
        });
        console.log("LoggedInHome / result.data: ", result.data);
      });
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  // const myTrips = tripState.userTrips

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
            <TripBasic
              link={`/trip/` + trip.id + `/dashboard`}
              title={trip.city}
              start={trip.start_date}
            />
          ))}
          <AddButton style={{ justifyContent: "flex-end" }} />
        </Card>
      </Container>
    </div>
  );
}
