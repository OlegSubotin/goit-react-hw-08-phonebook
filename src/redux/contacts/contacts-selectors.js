const getContacts = state => state.contacts.items;
const getFilterValue = state => state.contacts.filter;
const getLoading = state => state.contacts.isLoading;
const getError = state => state.contacts.error;


const contactsSelectors = {
    getContacts,
    getFilterValue,
    getLoading,
    getError,
};

export default contactsSelectors;