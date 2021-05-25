import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';

export default function Trip() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <h1>Trip Page</h1>
            </Container>
        </div>
    )
}
