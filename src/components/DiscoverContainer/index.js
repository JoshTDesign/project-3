import React from "react";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
// import TripDetailed from "../../components/TripDetailed";
import DiscTodo from "../../components/DiscTodo";
import DiscFood from "../../components/DiscFood";

export default function DiscoverContainer() {
    return (
        <div>
            <Container>
                <Paper elevation={3} variant="outlined" style={{ padding: 10 }}>
                    <DiscTodo />
                    <DiscFood />
                </Paper>
            </Container>
        </div>
    );
};