import React from 'react'
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/box";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import TripHeader from "../../components/TripHeader";

export default function Expenses() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
                <TripHeader />
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
                </Paper>
            </Container>
        </div>
    )
}
