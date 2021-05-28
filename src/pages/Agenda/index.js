import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
// import SidebarMenu from '../../components/SidebarMenu';
// import DashNavBtn from '../../components/DashNavBtn';
import TripDetailedContainer from '../../components/TripDetailedContainer';

export default function Agenda() {
  return (
    <div>
      <CssBaseline />
      {/* <SidebarMenu /> */}
      <Container maxWidth="sm">
        <h2>Get excited for your trip!</h2>
        <TripDetailedContainer />
      </Container>
    </div>
  );
};
