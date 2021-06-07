import { React } from "react";

import { Box } from "@material-ui/core";

const style = {
  margin: 0,
  padding: 0,
  backgroundColor: "#f3f5f9",
  borderRadius: "20px",
  padding: "20px",
  minHeight: "300px",
};

let testLat = "";
let testLon = "";

export default function DiscoverMap() {
  return (
    <Box p={0}>
      <div style={style}>Map placeholder</div>
    </Box>
  );
}
