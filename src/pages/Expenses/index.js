import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Card from "@material-ui/core/Card";
import TripHeader from "../../components/TripHeader";
import { Link, useParams } from "react-router-dom";

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

const btnStyle = {
  position: 'fixed',
  bottom: '15px',
  right: '15px',
}

export default function Expenses() {
  let { id } = useParams();

  return (
    <div style={{paddingLeft:15, paddingRight:15}}>
      <Container maxWidth="md" style={containerStyle}>
        <typography>
          <h2 style={{margin:0, padding: '15px'}}> Explore Header</h2>
        </typography>
          {/* <TripHeader /> */}
          <Box p={2}>
            <Card>
              <h3>Expenses content goes here</h3>
            </Card>
          </Box>

          <Box p={2}>
            <Card>
              <h3>More expenses content goes here</h3>
            </Card>
          </Box>

          <div>
            <Box
              display="flex"
              style={{ justifyContent: "flex-end", alignItems: "flex-end" }}
              m={2}
            >
              <Fab
                color="primary"
                aria-label="add"
                // onClick={() => props.addNewTrip("CreateTrip")}
                component={Link}
                to={`/Trip/${id}/Dashboard/newexpenseform`}
              >
                <AddIcon />
              </Fab>
            </Box>
          </div>
          
      </Container>
      </div>
  );
}
