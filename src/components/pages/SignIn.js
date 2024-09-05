import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './SignIn.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const handleSubmit = () => {
    dispatch(login(email, password));
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
            label="User Name"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          {authError && <Typography color="error">{authError.message}</Typography>}
          <Button variant="contained" fullWidth onClick={handleSubmit} className="login-button">
            Sign In
          </Button>
          <Typography className="sign-up-link">
            Not a member yet? <Link to="/register">Sign Up here</Link>
          </Typography>
        </Box>
      </Box>
      <Box className="right-side"></Box>
    </Box>
  );
};

export default Login;
