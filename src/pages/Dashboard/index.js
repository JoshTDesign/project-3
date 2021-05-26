import React from "react";
import Container from "@material-ui/core/Container";
import DashNavBtn from "../../components/DashNavBtn";
import TripHeader from "../../components/TripHeader";
import MultiContainer from "../../components/MultiContainer";

export default function Dashboard() {
  return (
    <div>
      <Container>
        <TripHeader />
        <DashNavBtn />
        <MultiContainer />
      </Container>
    </div>
  );
}
