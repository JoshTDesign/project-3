import React, {useEffect} from 'react';
import DiscoverContainer from "../../components/DiscoverContainer";
// import TripHeader from "../../components/TripHeader";
// import DiscTodo from "../../components/DiscTodo";
// import DiscFood from "../../components/DiscFood";
import {Container} from '@material-ui/core';
import {useHistory} from "react-router-dom";
// import Box from '@material-ui/core/Box';
const containerStyle = {
    height: '100vh',
  };

export default function Discover() {
    const history = useHistory();
    useEffect( () => {
        if(!localStorage.getItem('token')) {
            history.push('/login');
        }
    }, [])
    return (
        <Container maxWidth="md" padding="0" style={containerStyle}>

            <DiscoverContainer />
        </Container>
    )
}
