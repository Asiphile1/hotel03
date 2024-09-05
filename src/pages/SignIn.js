import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { login } from '../actions/authActions';
import { TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import { Link } from 'react-router-dom';
import './SignIn.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    
    if (!email || !password) {
      setAuthError("Please enter both email and password.");
      return;
    }

    try {
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential);

      
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/home');
      }, 3000);
      
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          setAuthError('Incorrect password.');
          break;
        case 'auth/user-not-found':
          setAuthError('No account found with this email.');
          break;
        case 'auth/invalid-email':
          setAuthError('Invalid email format.');
          break;
          case 'auth/too-many-requests':
            setAuthError('Too many failed login attempts. Please try again later.');
            break;
          default:
            setAuthError('Error signing in. Please try again.');
            break;
      }
    }
  };

  return (
    <Box className="login-container">
      <Box className="left-side">
        <Box className="login-box">
          <div className="geometric-pattern"></div>
          <div className="geometric-pattern-small"></div>
          <Typography variant="h4" className="title">
            Welcome, home
            </Typography>
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            fullWidth
            margin="normal"
            className="form-field"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            className="form-field"
          />
          {authError && <Typography color="error">{authError}</Typography>}
          <Button variant="contained" fullWidth onClick={handleSubmit} className="login-button">
            Sign In
          </Button>
          <Typography className="sign-up-link">
            Not a member yet? <Link to="/register">Sign Up here</Link>
          </Typography>
          <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={() => setOpenSnackbar(false)}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <Alert severity="success" onClose={() => setOpenSnackbar(false)}>
              Signed in successfully!
            </Alert>
          </Snackbar>
        </Box>
      </Box>
      <Box className="right-side"></Box>
    </Box>
  );
};

export default Login;
