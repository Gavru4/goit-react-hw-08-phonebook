import "./App.css";
import Section from "./Components/Section/Section";
import Filter from "./Components/Filter/Filter";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "./redux/contacts/contactsOperation";
import { loaderSelector } from "./redux/selectors/selectors";
const loaderStyle = {
  position: "absolute",
  paddingLeft: "50px",
};
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const isLoading = useSelector(loaderSelector);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        {isLoading && <h2 style={loaderStyle}>Loading....</h2>}
      </Section>

      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};

export default App;
