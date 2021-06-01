import React from 'react';
import DiscoverContainer from "../../components/DiscoverContainer";
// import TripHeader from "../../components/TripHeader";
// import DiscTodo from "../../components/DiscTodo";
// import DiscFood from "../../components/DiscFood";
import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';

const containerStyle = {
    height: '100vh',
  };

export default function Discover() {
    return (
        <Container maxWidth="md" padding="0" style={containerStyle}>

            <DiscoverContainer />
        </Container>
    )
}
