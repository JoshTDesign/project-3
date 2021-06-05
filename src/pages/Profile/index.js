import React, { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import API from "../../utils/API";
import Box from "@material-ui/core/Box";
import { Container, Card } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { Link, useParams } from "react-router-dom";

export default function Profile() {
  const [userState, setUserState] = useState({
    token: "",
    id: "",
    first_name: "",
    last_name: "",
    username: "",
    location: "",
    email: "",
  });

  useEffect( () => {
    userState.token = localStorage.getItem("token");
    if (userState.token) {
      API.getProfile(userState.token)
        .then((res) => {
          console.log("Profile / data: ", res.data);
         
        console.log(res.id);
          API.getDashboard(res.data.id, userState.token).then((result) => {
            console.log(result.data);
            setUserState({
              id: result.data.id,
              first_name: result.data.first_name,
              last_name: result.data.last_name,
              location: result.data.location,
              username: result.data.username,
              email: result.data.email,
            });
            console.log('Profile / result: ', result);
          })
      })
        .catch((err) => {
          console.log("profile page: no user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("profile page: no token");
    }
      }, []);

const { id } = useParams();


  return (
    <div>
      <MenuBar />
      <Box display="flex" style={{ justifyContent: "center", padding: 10 }}>
        <h1>{userState.username}'s Profile</h1>
      </Box>
      <Container maxWidth="md">
        <Card elevation={3} variant="outlined" style={{ padding: 10 }}>
          <h3>First Name: {userState.first_name}</h3>
          <h3>Last Name: {userState.last_name}</h3>
          <h3>Email: {userState.email}</h3>
          <h3>Username: {userState.username}</h3>
          <h3>Location: {userState.location}</h3>
        </Card>
        <Button component={Link} to={`/profile/${userState.id}/edit`}>Edit Profile</Button>
      </Container>
    </div>
  );
}
