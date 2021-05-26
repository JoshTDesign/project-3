import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';

export default function Login() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm" direction="column">
                <h1>Login Page</h1>
            </Container>
        </div>
    )
}
