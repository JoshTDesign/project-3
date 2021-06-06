import React from "react";
import {
  Typography,
  Card,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const containerStyle = {
  padding: "15px",
  margin: "15px",
  fontFamily: "Montserrat 500",
};

const style = {
  backgroundColor: "#f3f5f9",
  boxShadow: "none",
  borderRadius: "8px",
  textDecoration: "none",
  margin: 15,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function TripDetailed(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card style={style} id={props.id}>
        <div style={containerStyle}>
          <Accordion
            style={{ boxShadow: "none", backgroundColor: "rgb(243,245,249)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{props.event}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{props.description}</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Card>
    </div>
  );
}
