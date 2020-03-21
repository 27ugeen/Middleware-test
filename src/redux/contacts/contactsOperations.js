// import axios from 'axios';
import contactsActions from './contactsActions';

// axios.defaults.baseURL = 'http://localhost:9000';

const baseUrl = 'https://goit-phonebook-api.herokuapp.com/v1';
const authToken = '977f4503-57e7-4399-a1b5-3ea624a7599a';

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactRequest());

  fetch(`${baseUrl}/contacts`, {
    method: 'POST',
    headers: {
      Authorization: `${authToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, number }),
  })
    .then(resp => resp.json())
    .then(data => dispatch(contactsActions.addContactSuccess(data)))
    .catch(error => dispatch(contactsActions.addContactError(error)));
};

// const addContact = (name, number) => dispatch => {
//   dispatch(contactsActions.addContactRequest());

//   axios
//     .post('/contacts', { name, number })
//     .then(resp => dispatch(contactsActions.addContactSuccess(resp.data)))
//     .catch(error => dispatch(contactsActions.addContactError(error)));
// };

const fetchCotacts = () => dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  fetch(`${baseUrl}/contacts`, {
    method: 'GET',
    headers: {
      Authorization: `${authToken}`,
    },
  })
    .then(resp => resp.json())
    .then(data => dispatch(contactsActions.fetchContactsSuccess(data)))
    .catch(error => contactsActions.fetchContactsError(error));
};

// const fetchCotacts = () => dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());

//   axios
//     .get('/contacts')
//     .then(({ data }) => dispatch(contactsActions.fetchContactsSuccess(data)))
//     .catch(error => contactsActions.fetchContactsError(error));
// };

const deleteContact = id => dispatch => {
  dispatch(contactsActions.deleteContactRequest());

  fetch(`${baseUrl}/contacts/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `${authToken}`,
    },
  })
    .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
    .catch(error => dispatch(contactsActions.deleteContactError(error)));
};

// const deleteContact = id => dispatch => {
//   dispatch(contactsActions.deleteContactRequest());

//   axios
//     .delete(`/contacts/${id}`)
//     .then(() => dispatch(contactsActions.deleteContactSuccess(id)))
//     .catch(error => dispatch(contactsActions.deleteContactError(error)));
// };

export default {
  addContact,
  fetchCotacts,
  deleteContact,
};
