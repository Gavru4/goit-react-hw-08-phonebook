import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addUserContacts } from "../../redux/contacts/contactsOperation";

const stateObj = {
  name: "",
  number: "",
};
const ContactForm = () => {
  const [form, setForm] = useState(stateObj);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const heandlerInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  // const onContactIncludes = (form) => {
  //   const isIncludes = contacts.some((el) => el.name === form.name);
  //   if (isIncludes) return alert(`${form.name} is olredy in contact`);

  //   dispatch(newUser(form));
  // };

  const onFormSubmit = (e) => {
    e.preventDefault();
    // onContactIncludes(form);
    // dispatch(newUser(form));
    dispatch(addUserContacts(form));
    resetForm();
  };

  const resetForm = () => {
    setForm(stateObj);
  };
  return (
    <form className={s.form} onSubmit={onFormSubmit}>
      <label className={s.label}>
        <span className={s.title}>Name</span>
        <input
          value={form.name}
          onChange={heandlerInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <span className={s.title}>Number</span>
        <input
          value={form.number}
          onChange={heandlerInputChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.btn} type="submit">
          Add Contact
        </button>
      </label>
    </form>
  );
};

export default ContactForm;
