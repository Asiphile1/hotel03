
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bookHotel } from '../../actions/bookingActions';
import { TextField, Button, Container } from '@mui/material';

const Booking = ({ hotelId }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const dispatch = useDispatch();

  const handleBooking = () => {
    const bookingDetails = {
      hotelId,
      checkIn,
      checkOut,
      guests,
    };
    dispatch(bookHotel(bookingDetails));
  };

  return (
    <Container maxWidth="sm">
      <h2>Book Hotel</h2>
      <TextField
        label="Check-In Date"
        type="date"
        value={checkIn}
        onChange={(e) => setCheckIn(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Check-Out Date"
        type="date"
        value={checkOut}
        onChange={(e) => setCheckOut(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Number of Guests"
        type="number"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleBooking}>
        Confirm Booking
      </Button>
    </Container>
  );
};

export default Booking;
