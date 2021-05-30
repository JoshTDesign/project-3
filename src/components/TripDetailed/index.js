import React from "react";
import Box from "@material-ui/core/box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TripHeader from "../../components/TripHeader";

const containerStyle = {
  background: 'white',
  border: 0,
  color: '#333333',
  padding: 0,
  fontFamily: 'Montserrat 500',
};


export default function TripDetailed(props) {
  return (
    <div style={containerStyle}>
      {/* <TripHeader /> */}
      <Box p={2}>
        <Card handleclick={props.handleclick}>
          <Typography display="inline">
            <h3>
            {props.event}
            </h3>
            <p>
            {props.description}
            </p>
            <p>
            {props.start} {props.end}
            </p>
          </Typography>
            {props.image}
        
        </Card>
      </Box>
    </div>
  );
}
