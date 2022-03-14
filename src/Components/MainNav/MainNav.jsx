import UserMenu from "../UserMenu/UserMenu";
import { NavLink } from "react-router-dom";
import s from "./MainNav.module.css";

const MainNav = () => {
  return (
    <div className={s.nav}>
      <NavLink to={"/"} activeStyle={{ color: "red" }}>
        Home Page
      </NavLink>
      <NavLink to={"/register"} activeStyle={{ color: "red" }}>
        Register
      </NavLink>
      <NavLink to={"/login"} activeStyle={{ color: "red" }}>
        {" "}
        Login
      </NavLink>
      <UserMenu />
    </div>
  );
};

export default MainNav;
