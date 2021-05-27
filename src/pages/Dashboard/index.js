import React from "react";
import Container from "@material-ui/core/Container";
import DashNavBtn from "../../components/DashNavBtn";
import TripHeader from "../../components/TripHeader";
import MultiContainer from "../../components/MultiContainer";
import SidebarMenu from "../../components/SidebarMenu";
import MenuBar from "../../components/MenuBar";

export default function Dashboard() {
  return (
    <div>
      <SidebarMenu />
      <MenuBar />
      <Container>
        <TripHeader />
        <DashNavBtn />
        <MultiContainer />
      </Container>
    </div>
  );
}
