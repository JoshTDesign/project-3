import React from "react";
import {Box} from "@material-ui/core";
import {Card} from "@material-ui/core";
import {Typography} from "@material-ui/core";

export default function DiscFood() {
  return (
    <div>
      <Box p={2}>
        <Card>
          <Typography variant={"h6"} display="inline">
            Restaurant Name
          </Typography>

          <Typography variant={"h6"}>
            Restaurant Description/link/photo/etc...?
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
