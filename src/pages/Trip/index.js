import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import SidebarMenu from '../../components/SidebarMenu';
import DashNavBtn from '../../components/DashNavBtn';
import TripDetailedContainer from '../../components/TripDetailedContainer';

export default function Trip() {
  return (
    <div>
      <CssBaseline />
      <SidebarMenu />
      <DashNavBtn />
      <Container maxWidth="sm">
        <h1>Trip Page</h1>
        <TripDetailedContainer />
      </Container>
    </div>
  );
};
