import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';

export default function Dashboard() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>Dashboard Page</h1>
            </Container>
        </div>
    )
}
