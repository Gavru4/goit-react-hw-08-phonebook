import { useState } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const UserContacts = () => {
  const [editingContact, setEditingContact] = useState(null);

  const editingUserContacts = (el) => {
    setEditingContact(el);
  };

  return (
    <>
      <ContactForm
        editingContact={editingContact}
        onUserContactsEdit={editingUserContacts}
      />
      <Filter />
      <ContactList editingUserContacts={editingUserContacts} />
    </>
  );
};

export default UserContacts;
