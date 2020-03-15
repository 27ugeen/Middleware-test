const getFilter = state => state.contacts.filter;

const getContactsItems = state => state.contacts.items;

const getFilteredContacts = state => {
  const items = getContactsItems(state);
  const filter = getFilter(state).toLowerCase();

  return items.filter(({ name }) => name.toLowerCase().includes(filter));
};

export default {
  getFilter,
  getFilteredContacts,
};
