import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

// const loaderStyle = {
//   position: "absolute",
//   paddingLeft: "50px",
// };

const UserContacts = () => {
  //   const isLoading = useSelector(loaderSelector);
  // const userToken = useSelector((state) => state.contacts);

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
