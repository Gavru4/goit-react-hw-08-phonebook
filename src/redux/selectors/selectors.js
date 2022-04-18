export const filterContactsSelectors = (state) => {
  const { filter, contacts } = state;
  const normalizedFilter = filter.toLocaleLowerCase();
  const findEl =
    contacts.userContacts.length === 0
      ? []
      : contacts.userContacts.filter((contact) =>
          contact.name.toLocaleLowerCase().includes(normalizedFilter)
        );
  return findEl;
};

export const loaderSelector = ({ isloading }) => isloading;
export const contactIsDeleted = (state) => state.contacts.contactIsDeleted;
export const contactIsUpdated = (state) => state.contacts.contactIsUpdated;
export const contactIsAdded = (state) => state.contacts.contactIsAdded;
