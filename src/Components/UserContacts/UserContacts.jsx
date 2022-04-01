import { useState } from "react";
import { useSelector } from "react-redux";
import { loaderSelector } from "../../redux/selectors/selectors";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

const loaderStyle = {
  position: "absolute",
  paddingLeft: "50px",
};

const UserContacts = () => {
  const isLoading = useSelector(loaderSelector);

  const [editingContact, setEditingContact] = useState(null);

  const editingUserContacts = (el) => {
    setEditingContact(el);
  };

  return (
    <>
      <ContactForm editingContact={editingContact} />
      {isLoading && <h2 style={loaderStyle}>Loading....</h2>}
      <Filter />
      <ContactList editingUserContacts={editingUserContacts} />
    </>
  );
};

export default UserContacts;
