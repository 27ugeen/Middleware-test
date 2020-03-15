import { createSelector } from '@reduxjs/toolkit';

const getFilter = state => state.contacts.filter;

const getContactsItems = state => state.contacts.items;

const getFilteredContacts = createSelector(
  [getContactsItems, getFilter],
  (items, filter) =>
    items.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);

// const gfc = state => {
//   const items = getContactsItems(state);
//   const filter = getFilter(state).toLowerCase();

//   return items.filter(({ name }) => name.toLowerCase().includes(filter));
// };

const getContactById = (state, contactId) => {
  const items = getContactsItems(state);

  return items.find(item => item.id === contactId);
};

export default {
  getFilter,
  getFilteredContacts,
  getContactById,
};
