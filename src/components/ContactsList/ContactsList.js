import React from 'react';
import { connect } from 'react-redux';
import ContactsListItem from './ContactsListItem';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import PropTypes from 'prop-types';
import styles from './ContactsList.module.css';

const { contactsList } = styles;

const ContactsList = ({ contacts }) => (
  <ul className={contactsList}>
    {contacts.map(({ id }) => (
      <ContactsListItem key={id} id={id} />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getFilteredContacts(state),
});

export default connect(mapStateToProps)(ContactsList);
