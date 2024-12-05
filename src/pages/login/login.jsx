import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { NavLink } from 'react-router';




export default function SignUp(props) {
    return (
        <div>
            <Container maxWidth="xs">
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />

                <NavLink to="/home" end>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </NavLink>
            </Container>
        </div>
    );
}