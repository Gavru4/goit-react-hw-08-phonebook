import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/user/userOperation";

const UserMenu = () => {
  const userName = useSelector((state) => state.user.user);
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
