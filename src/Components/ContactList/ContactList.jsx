import { useSelector } from "react-redux";
import s from "./ContactList.module.css";
import {
  filterContactsSelectors,
  loaderSelector,
} from "../../redux/selectors/selectors";
import { useDispatch } from "react-redux";
import {
  deleteContact,
  getUserContacts,
} from "../../redux/contacts/contactsOperation";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import { Plane } from "react-loader-spinner";

const ContactList = ({ editingUserContacts }) => {
  const contactsList = useSelector((state) => filterContactsSelectors(state));
  const dispatch = useDispatch();
  const isLoading = useSelector(loaderSelector);

  useEffect(() => {
    dispatch(getUserContacts());
  }, []);

  return (
    <>
      {isLoading && (
        <div className={s.loaderStyle}>
          <Plane
            ariaLabel="loading-indicator"
            height={200}
            width={200}
            strokeWidth={5}
            color="black"
            secondaryColor="blue"
          />
        </div>
      )}

      {contactsList && (
        <ListGroup as="ol" numbered className={s.list}>
          {contactsList?.map((el) => {
            return (
              <ListGroup.Item as="li" className={s.item} key={el.id}>
                {el.name}: {el.number}
                <div className={s.btnWrapper}>
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
                </div>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      )}
    </>
  );
};

export default ContactList;
