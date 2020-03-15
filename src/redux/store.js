import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
