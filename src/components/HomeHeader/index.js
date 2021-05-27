import React from 'react'
import Box from "@material-ui/core/box";
import Typography from "@material-ui/core/Typography";

export default function HomeHeader() {
    return (
        <div>
            <Box display="flex" style={{ justifyContent: "center" }}>
                <Typography variant={"h1"}>
                    My Trips
                </Typography>
            </Box>
        </div>
    )
}
