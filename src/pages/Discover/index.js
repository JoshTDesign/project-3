import React, { useEffect } from "react";
import DiscoverContainer from "../../components/DiscoverContainer";
import { Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
const containerStyle = {
    color: "#333333",
    textAlign: "center",
  };

export default function Discover() {
  const history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
    }
  }, []);
  return (
    <Container maxWidth="md" padding="0" style={containerStyle}>
      <DiscoverContainer />
    </Container>
  );
}
