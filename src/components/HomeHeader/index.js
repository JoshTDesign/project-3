import React from 'react'
import {Box} from "@material-ui/core";
import {Typography} from "@material-ui/core";

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
