import React from "react";
import { Button, Container, Grid, Typography, Box } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Container maxWidth="lg">
      {/* Navbar */}
      <Box className="navbar">
        <Box>
          <Button>Home</Button>
          <Button>Rooms</Button>
          <Button>Services</Button>
          <Button>About Us</Button>
          <Button>Contact Us</Button>
        </Box>
        <Button variant="contained" color="primary">
          Sign Up
        </Button>
      </Box>

      {/* Hero Section */}
      <Box className="hero-section">
        <Typography variant="h2">Welcome to Our Hotel</Typography>
      </Box>

      {/* Search Filters */}
      <Grid container spacing={2} className="search-filters">
        <Grid item xs={3}>
          <Button variant="outlined">Filter 1</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined">Filter 2</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined">Filter 3</Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="outlined">Filter 4</Button>
        </Grid>
      </Grid>

      {/* Featured Section */}
      <Grid container spacing={2} className="featured-section">
        <Grid item xs={6}>
          <Box className="featured-text">
            <Typography variant="body1">
              Some descriptive text goes here.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className="featured-image"></Box>
        </Grid>
      </Grid>

      {/* Explore Rooms Section */}
      <Box className="explore-rooms">
        <Typography variant="h4">Explore Rooms</Typography>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Box className="room-card">
              <Box className="room-image"></Box>
              <Typography variant="h6">Room Name</Typography>
              <Typography variant="body2">Description of the room</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="room-card">
              <Box className="room-image"></Box>
              <Typography variant="h6">Room Name</Typography>
              <Typography variant="body2">Description of the room</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box className="room-card">
              <Box className="room-image"></Box>
              <Typography variant="h6">Room Name</Typography>
              <Typography variant="body2">Description of the room</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Footer */}
      <Box className="footer">
        <Box className="footer-content">
          <Typography variant="body1">Contact Us</Typography>
          <Typography variant="body2">Address: dfhfh dfhrdg</Typography>
          <Typography variant="body2">Phone: 868327</Typography>
          <Typography variant="body2">Email: esybhrg@in</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
