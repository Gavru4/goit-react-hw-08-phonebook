import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addUserContacts,
  updateUserContacts,
} from "../../redux/contacts/contactsOperation";
import { Button, Form } from "react-bootstrap";

const stateObj = {
  name: "",
  number: "",
};
const ContactForm = ({ editingContact }) => {
  const [form, setForm] = useState(stateObj);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const heandlerInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onContactIncludes = (form) => {
    const isIncludes = contacts.some((el) => el.name === form.name);
    if (isIncludes) return alert(`${form.name} is olredy in contact`);

    dispatch(addUserContacts(form));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editingContact
      ? dispatch(updateUserContacts({ form, contactId: editingContact.id }))
      : onContactIncludes(form);
    setForm(stateObj);
  };

  useEffect(() => {
    if (editingContact) {
      const { name, number } = editingContact;
      setForm({ name: name, number: number });
    }
  }, [editingContact]);
  return (
    <>
      <Form className={s.form} onSubmit={onFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={form.name}
            onChange={heandlerInputChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number:</Form.Label>
          <Form.Control
            value={form.number}
            onChange={heandlerInputChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
