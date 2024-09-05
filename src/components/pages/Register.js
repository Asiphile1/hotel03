import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../actions/authActions';
import { TextField, Button, Box, Typography } from '@mui/material';
import './Register.css'; 

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const handleSubmit = () => {
    dispatch(register(email, number)); 
  };

  return (
    <Box className="register-container">
      <Box className="register-box">
        <Typography variant="h5" className="title">
          SIGN-UP DETAILS
        </Typography>
        <Box className="input-container">
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
          />
        </Box>
        <Box className="input-container">
          <TextField
            label="Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
          />
          <TextField
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
          />
        </Box>
        {authError && <Typography color="error">{authError.message}</Typography>}
        <Button variant="contained" onClick={handleSubmit} className="register-button">
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default Register;
