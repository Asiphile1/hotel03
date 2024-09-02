// src/actions/bookingActions.js
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';

export const bookHotel = (bookingDetails) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), bookingDetails);
    dispatch({ type: 'BOOK_HOTEL_SUCCESS', payload: { id: docRef.id, ...bookingDetails } });
  } catch (error) {
    dispatch({ type: 'BOOK_HOTEL_ERROR', error });
  }
};
