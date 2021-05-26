import React from "react";
import Container from "@material-ui/core/Container";
<<<<<<< HEAD
import Box from "@material-ui/core/box";
import Button from "@material-ui/core/Button";
// import AddButton from "../../components/AddButton";
=======
import DashNavBtn from "../../components/DashNavBtn";
import TripHeader from "../../components/TripHeader";
import MultiContainer from "../../components/MultiContainer";
>>>>>>> 9b3c78e4fa36d69839f2bf43bbe045e9fd0dd64b

export default function Dashboard() {
  return (
    <div>
      <Container>
<<<<<<< HEAD
        {/* <AddButton /> */}
=======
        <TripHeader />
        <DashNavBtn />
        <MultiContainer />
>>>>>>> 9b3c78e4fa36d69839f2bf43bbe045e9fd0dd64b
      </Container>
    </div>
  );
}
