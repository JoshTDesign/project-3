import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TripDetailed from "../../components/TripDetailed";
import AddButton from "../../components/AddButton";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Box from "@material-ui/core/box";
import { Link } from "react-router-dom";
// import AddButton from "../AddButton";


const containerStyle = {
  backgroundColor: "white",
  height: '80vh',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  borderBottomRightRadius: 8,
  borderBottomLeftRadius: 8,
  border: 0,
  color: '#333333',
  padding: 0,
};

const btnStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
}



export default function TripDetailedContainer(props) {
  return (
      <Container maxWidth="md" style={containerStyle}>
          <typography>
            <h2 style={{margin:0, padding: '15px'}}>{props.city}</h2>
          </typography>
          <TripDetailed event="test title" description="test description" />
          <TripDetailed event="test title" description="test description" />
          <TripDetailed event="test title" description="test description" />
          <div>
            <AddButton />
          </div>
      </Container>
  );
}
