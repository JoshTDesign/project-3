import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TripHeader from "../../components/TripHeader";
// import TripDetailed from "../../components/TripDetailed";
import DiscTodo from "../../components/DiscTodo";
import DiscFood from "../../components/DiscFood";

export default function DiscoverContainer() {
    return (
        <div>
            <Container maxWidth="sm">
                <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
                <TripHeader />
                    <DiscTodo />
                    <DiscFood />
                </Paper>
            </Container>
        </div>
    );
};