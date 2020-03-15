import { createAction } from '@reduxjs/toolkit';
// import { uuid } from 'uuidv4';
// import actionsTypes from './contactsActionsTypes';

const addContactRequest = createAction('contacts/addRequest');
const addContactSuccess = createAction('contacts/addSuccess');
const addContactError = createAction('contacts/addError');

const fetchContactsRequest = createAction('contacts/fetchRequest');
const fetchContactsSuccess = createAction('contacts/fetchSuccess');
const fetchContactsError = createAction('contacts/fetchError');

const deleteContactRequest = createAction('contacts/deleteRequest');
const deleteContactSuccess = createAction('contacts/deleteSuccess');
const deleteContactError = createAction('contacts/deleteError');

// const addContact = createAction('contacts/add', (name, number) => ({
//   payload: {
//     contact: {
//       id: uuid(),
//       name,
//       number,
//     },
//   },
// }));

// const deleteContact = createAction('contacts/delete');

// const deleteContact = contactId => ({
//   type: actionsTypes.DELETE,
//   payload: {
//     contactId,
//   },
// });

const changeFilter = createAction('contacts/changeFilter');

// const changeFilter = filter => ({
//   type: actionsTypes.CHANGE_FILTER,
//   payload: {
//     filter,
//   },
// });

export default {
  // addContact,

  // deleteContact,

  changeFilter,
  addContactRequest,
  addContactSuccess,
  addContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};
