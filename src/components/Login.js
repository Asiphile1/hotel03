// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/authActions';
import { TextField, Button, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error);

  const handleSubmit = () => {
    dispatch(login(email, password));
  };

  return (
    <Container maxWidth="sm">
      <h2>Login</h2>
      <TextField
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {authError && <p style={{ color: 'red' }}>{authError.message}</p>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Login
      </Button>
    </Container>
  );
};

export default Login;
