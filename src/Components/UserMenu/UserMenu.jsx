import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../redux/user/userOperation";
import s from "./userMenu.module.css";

const UserMenu = () => {
  const userName = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  return (
    <>
      <div className={s.wrepper}>
        <p className={s.walcomeText}>Добро пожаловать: {userName.name}</p>
        <Button
          variant="success"
          className="mx-2"
          size="sm"
          type="button"
          onClick={() => {
            dispatch(userLogout());
          }}
        >
          Logout
        </Button>
      </div>
    </>
  );
};

export default UserMenu;
