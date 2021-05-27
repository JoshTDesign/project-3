import React from "react";
import Box from "@material-ui/core/box";
// import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TripHeader from "../../components/TripHeader";


export default function TripDetailed(props) {
  return (
    <div>
      <TripHeader />
      <Box p={2}>
        <Card handleClick={props.handleClick}>
          <Typography variant={"h6"} display="inline">
            Trip Name Here!
          </Typography>

          <Typography>How do we want to organize and show the details?
          </Typography>
        
        </Card>
      </Box>
    </div>
  );
}
