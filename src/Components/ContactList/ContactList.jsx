import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
// import { filterContactsSelectors } from "../../redux/selectors/selectors";
import { useDispatch } from "react-redux";
import {
  addUserContacts,
  deleteContact,
  getUserContacts,
} from "../../redux/contacts/contactsOperation";
import { useEffect } from "react";
import { getUsersContactsApi } from "../../utils/contactsApi";

const ContactList = () => {
  // const contactsList = useSelector((state) => filterContactsSelectors(state));
  const dispatch = useDispatch();
  // const contactsList = useSelector((state) => state);

  // useEffect(() => {

  // }, []);
  return (
    <>
      {/* {contactsList && (
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
              </li>
            );
          })}
        </ol>
      )} */}
    </>
  );
};

export default ContactList;
