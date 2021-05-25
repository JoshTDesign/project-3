import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'; // imports a global reset for css styling
import Container from '@material-ui/core/Container';
import SignupForm from '../../components/SignupForm';

export default function Signup() {
    return (
        <div>
            <CssBaseline />
            <Container maxWidth="sm">
                <SignupForm />
            </Container>
        </div>
    )
}
