import React, { useState, useEffect } from "react";
import MenuBar from "../../components/MenuBar";
import API from "../../utils/API";
import Box from "@material-ui/core/Box";
import { Container, Card } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";


export default function Profile() {
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      API.getProfile(token)
        .then((res) => {
          console.log("profile page:", res.data);
          setUserState({
            token: token,
            user: {
              id: res.data.id,
              image: res.data.image_path,
              firstName: res.data.first_name,
              lastName: res.data.last_name,
              email: res.data.email,
              username: res.data.username,
              location: res.data.location,
            },
          });
        })
        .then(
          API.getDashboard(userState.user.id, token).then((res) => {
            setUserState({
              userState: res.data,
            });
          })
        )
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

  return (
    <div>
      <MenuBar />
      <Box display="flex" style={{ justifyContent: "center", padding: 10 }}>
        <h1>{userState.user.username}'s Profile</h1>
        <Box display="flex">
          <Avatar src={userState.user.image} alt="profile-pic" />
        </Box>
      </Box>
      <Container maxWidth="md">
        <Card elevation={3} variant="outlined" style={{ padding: 10 }}>
          <h3>First Name: {userState.user.firstName}</h3>
          <h3>Last Name: {userState.user.lastName}</h3>
          <h3>Email: {userState.user.email}</h3>
          <h3>Username: {userState.user.username}</h3>
          <h3>Location: {userState.user.location}</h3>
        </Card>
      </Container>
    </div>
  );
}
