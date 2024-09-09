
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';

export const fetchHotels = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, 'hotels'));
    const hotels = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    dispatch({ type: 'FETCH_HOTELS_SUCCESS', payload: hotels });
  } catch (error) {
    dispatch({ type: 'FETCH_HOTELS_ERROR', error });
  }
};

export const addHotel = (hotel) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, 'hotels'), hotel);
    dispatch({ type: 'ADD_HOTEL_SUCCESS', payload: { id: docRef.id, ...hotel } });
  } catch (error) {
    dispatch({ type: 'ADD_HOTEL_ERROR', error });
  }
};

export const updateHotel = (id, updatedHotel) => async (dispatch) => {
  try {
    const hotelRef = doc(db, 'hotels', id);
    await updateDoc(hotelRef, updatedHotel);
    dispatch({ type: 'UPDATE_HOTEL_SUCCESS', payload: { id, ...updatedHotel } });
  } catch (error) {
    dispatch({ type: 'UPDATE_HOTEL_ERROR', error });
  }
};

export const deleteHotel = (id) => async (dispatch) => {
  try {
    const hotelRef = doc(db, 'hotels', id);
    await deleteDoc(hotelRef);
    dispatch({ type: 'DELETE_HOTEL_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_HOTEL_ERROR', error });
  }
};
