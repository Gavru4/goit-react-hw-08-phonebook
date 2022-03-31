import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import { filterContactsSelectors } from "../../redux/selectors/selectors";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  getUserContacts,
  updateUserContacts,
} from "../../redux/contacts/contactsOperation";
import { useEffect } from "react";

const ContactList = () => {
  const contactsList = useSelector((state) => filterContactsSelectors(state));
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state);
  // const contactsList = useSelector((state) => state.contacts);
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
                <button
                  className={s.btn}
                  onClick={() => {
                    dispatch(deleteContact(el.id));
                  }}
                >
                  Delate
                </button>
                <button
                  className={s.btn}
                  onClick={() => {
                    dispatch(updateUserContacts(userToken));
                  }}
                >
                  Update
                </button>
              </li>
            );
          })}
        </ol>
      )}
    </>
  );
};

export default ContactList;
