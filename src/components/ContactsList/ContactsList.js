import React from 'react';
import ContactsListItem from './ContactsListItemContainer';
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
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

;

export default ContactsList;
