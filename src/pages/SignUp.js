import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/authActions';
import { TextField, Button, Box, Typography, Snackbar, Alert } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import './SignUp.css'

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    if (!email || !password) {
      setAuthError("Please provide both email and password.");
      return;
    }

    try {
   
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      console.log('User registered successfully:', userCredential);

      setOpenSnackbar(true); 
      setTimeout(() => {
        navigate('/login');
      }, 3000);

      
    } catch (error) {
    
      setAuthError(error.message);
    }
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
            label="Phone Number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
            type="tel"
          />
          <TextField
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-field"
            margin="normal"
            fullWidth
            type="email"
          />
        </Box>
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-field"
          margin="normal"
          fullWidth
          type="password"
        />
        {authError && <Typography color="error">{authError}</Typography>}
        <Button variant="contained" onClick={handleSubmit} className="register-button">
          Sign Up
        </Button>

        
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
            Signed up successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};


export default Register;
