import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TripHeader from "../../components/TripHeader";
// import TripDetailed from "../../components/TripDetailed";
import DiscTodo from "../../components/DiscTodo";
import DiscFood from "../../components/DiscFood";
import AddButton from "../../components/AddButton";

const containerStyle = {
    backgroundColor: "white",
    height: '100vh',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    border: 0,
    color: '#333333',
    padding: 0,
  };
  




export default function DiscoverContainer() {
    return (
        <Container maxWidth="md" style={containerStyle}>
                <typography>
                <h2 style={{margin:0, padding: '15px'}}>Discover Header</h2>
                </typography>
                <DiscTodo />
                <DiscFood />
                <AddButton />
        </Container>
    )
};