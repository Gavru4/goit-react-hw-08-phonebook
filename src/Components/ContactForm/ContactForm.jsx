import s from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addUserContacts,
  updateUserContacts,
} from "../../redux/contacts/contactsOperation";
import { Button, Form } from "react-bootstrap";
import { Report } from "notiflix/build/notiflix-report-aio";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {
  contactIsAdded,
  contactIsUpdated,
} from "../../redux/selectors/selectors";

const stateObj = {
  name: "",
  number: "",
};
const ContactForm = ({ editingContact }) => {
  const [form, setForm] = useState(stateObj);

  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.userContacts);
  const isUpdated = useSelector(contactIsUpdated);
  // const isAdded = useSelector(contactIsAdded);
  const contactIsAdded = useSelector((state) => state.contacts.contactIsAdded);

  const heandlerInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const onContactIncludes = (form) => {
    const isIncludes = contacts.some((el) => el.name === form.name);
    if (isIncludes) {
      return Report.failure(
        "Very sorry 😞",
        `${form.name}, already in the contact list`,
        "Okay"
      );
    }
    dispatch(addUserContacts(form));
    console.log(contactIsAdded);

    contactIsAdded && Notify.success("New contact successfully added 🙂");
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    editingContact
      ? dispatch(updateUserContacts({ form, contactId: editingContact.id }))
      : onContactIncludes(form);
    setForm(stateObj);
    isUpdated && Notify.info("Contact is updated");
  };
  console.log(editingContact);
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
