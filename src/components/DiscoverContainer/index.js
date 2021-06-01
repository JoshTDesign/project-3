import React from "react";
import Container from "@material-ui/core/Container";
import DiscTodo from "../../components/DiscTodo";
import DiscFood from "../../components/DiscFood";
import Typography from "@material-ui/core/Typography";

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
                <Typography>
                <h2 style={{margin:0, padding: '15px'}}>Discover Header</h2>
                </Typography>
                <DiscTodo />
                <DiscFood />
                {/* <AddButton /> */}
        </Container>
    )
};