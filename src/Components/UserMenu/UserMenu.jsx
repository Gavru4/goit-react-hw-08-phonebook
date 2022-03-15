import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/contacts/contactsOperation";

const UserMenu = () => {
  const userName = useSelector((state) => state.contacts.user);
  const dispatch = useDispatch();

  return (
    <>
      <p>Добро пожаловать {userName.name}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(userLogout());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default UserMenu;
