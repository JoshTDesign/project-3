import React from "react";
import Box from "@material-ui/core/box";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

export default function DiscTodo() {
  return (
    <div>
      <Box p={2}>
        <Card>
          <Typography variant={"h6"} display="inline">
           Todo Name
          </Typography>

          <Typography variant={"h6"}>
            Todo Description/link/photo/etc...?
          </Typography>
        </Card>
      </Box>
    </div>
  );
}
