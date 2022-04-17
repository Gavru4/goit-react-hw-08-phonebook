import { useSelector } from "react-redux";
import s from "./HomePage.module.css";

const HomePage = () => {
  const logIn = useSelector((state) => state.user.isLogedIn);
  const UserName = useSelector((state) => state.user.user);
  return (
    <>
      {logIn && UserName !== null ? (
        <p className={s.text}>
          We are glad that you are with us, {UserName.name}
        </p>
      ) : (
        <p className={s.text}>Welcome to the most convenient phonebook</p>
      )}
    </>
  );
};

export default HomePage;
