import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHotel, updateHotel, deleteHotel } from "../../actions/hotelActions";
import { TextField, Button, Container, Grid } from "@mui/material";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);

  const handleAddHotel = () => {
    const newHotel = {
      name: "New Hotel",
      address: "123 Main St",
      pricePerNight: 100,
      imageUrl: "https://via.placeholder.com/150",
    };
    dispatch(addHotel(newHotel));
  };

  const handleUpdateHotel = (id) => {
    const updatedHotel = {
      name: "Updated Hotel Name",
      address: "456 Updated St",
      pricePerNight: 120,
      imageUrl: "https://via.placeholder.com/150",
    };
    dispatch(updateHotel(id, updatedHotel));
  };

  const handleDeleteHotel = (id) => {
    dispatch(deleteHotel(id));
  };

  return (
    <Container>
      <h2>Admin Panel</h2>
      <Button variant="contained" color="primary" onClick={handleAddHotel}>
        Add Hotel
      </Button>
      <Grid container spacing={4}>
        {hotels.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4}>
            <TextField
              label="Hotel Name"
              value={hotel.name}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Hotel Address"
              value={hotel.address}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Price per Night"
              value={hotel.pricePerNight}
              fullWidth
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleUpdateHotel(hotel.id)}
            >
              Update
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDeleteHotel(hotel.id)}
            >
              Delete
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminPanel;
