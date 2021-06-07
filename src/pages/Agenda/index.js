import { React, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import TripDetailedContainer from "../../components/TripDetailedContainer";
import API from "../../utils/API";
import { useParams, useHistory } from "react-router-dom";

export default function Agenda() {
 
  const [userState, setUserState] = useState({
    token: "",
    user: {},
  });

  const [activityState, setActivityState] = useState({
    activity: [],
    userActivity: [],
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

  const [tripState, setTripState] = useState({
    Trip: [],
  });

  const history = useHistory();
  // let { thisId } = useParams();
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      API.getProfile(token)
        .then((res) => {
          // console.log(res.data);
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
          API.getTripById(userState.id, userState.token).then((res) => {
            setTripState({
              Trip: res.data,
            });
          })
        )
        .catch((err) => {
          console.log("no logged in user");
          setUserState({
            token: "",
            user: {},
          });
        });
    } else {
      console.log("no token provided");
      history.push("/login");
    }
  }, []);

  return (
    <Container maxWidth="md" padding="0">
      <TripDetailedContainer city="city" />
    </Container>
  );
}
