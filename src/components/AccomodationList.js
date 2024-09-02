// src/components/AccommodationList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHotels } from '../actions/hotelActions';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Container } from '@mui/material';

const AccommodationList = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <Container>
      <Grid container spacing={4}>
        {hotels.map((hotel) => (
          <Grid item key={hotel.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={hotel.imageUrl}
                alt={hotel.name}
              />
              <CardContent>
                <Typography variant="h5">{hotel.name}</Typography>
                <Typography variant="body2" color="text.secondary">{hotel.address}</Typography>
                <Typography variant="body2" color="text.secondary">${hotel.pricePerNight}/night</Typography>
              </CardContent>
              <Button size="small" color="primary">View Details</Button>
              <Button size="small" color="secondary">Add to Favourites</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccommodationList;
