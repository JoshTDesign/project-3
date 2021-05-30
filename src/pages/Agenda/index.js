import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
// import SidebarMenu from '../../components/SidebarMenu';
// import DashNavBtn from '../../components/DashNavBtn';
import TripDetailedContainer from '../../components/TripDetailedContainer';
import AddButton from "../../components/AddButton";
import NextEvent from "../../components/NextEvent";

const style = {
  height: '100vh',
};

export default function Agenda() {
  return (
      <Container maxWidth="md" padding="0" style={style}>
        <TripDetailedContainer />
        <NextEvent event="Event Title Placeholder" time="time"/>
      </Container>
  );
};
