
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions';
import { TextField, Button, Container } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector(state => state.auth.error);

  const handleSubmit = () => {
    dispatch(register(email, password));
  };

  return (
    <Container maxWidth="sm">
      <h2>Register</h2>
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
        Register
      </Button>
    </Container>
  );
};

export default Register;
