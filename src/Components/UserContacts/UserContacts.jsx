import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserContacts } from "../../redux/contacts/contactsOperation";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

// const loaderStyle = {
//   position: "absolute",
//   paddingLeft: "50px",
// };

const UserContacts = () => {
  //   const isLoading = useSelector(loaderSelector);
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.contacts);

  return (
    <>
      <ContactForm />
      {/* {isLoading && <h2 style={loaderStyle}>Loading....</h2>} */}

      <Filter />
      <ContactList />
    </>
  );
};

export default UserContacts;
