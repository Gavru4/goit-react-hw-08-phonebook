import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { filterContactsSelectors } from "../../redux/selectors/selectors";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  getUserContacts,
} from "../../redux/contacts/contactsOperation";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";

const ContactList = ({ editingUserContacts }) => {
  const contactsList = useSelector((state) => filterContactsSelectors(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserContacts());
  }, []);

  return (
    <>
      {contactsList && (
        <ol className={s.list}>
          {contactsList?.map((el) => {
            return (
              <li className={s.item} key={el.id}>
                {el.name}: {el.number}
                <Button
                  variant="danger"
                  className="mx-2"
                  size="sm"
                  onClick={() => {
                    dispatch(deleteContact(el.id));
                  }}
                >
                  Delate
                </Button>
                <Button
                  variant="success"
                  className="mx-2"
                  size="sm"
                  onClick={() => editingUserContacts(el)}
                >
                  Update
                </Button>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};

export default ContactList;
