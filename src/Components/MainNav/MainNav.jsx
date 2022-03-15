import { NavLink } from "react-router-dom";
import s from "./MainNav.module.css";

const MainNav = () => {
  return (
    <div className={s.nav}>
      <NavLink to={"/"} activeStyle={{ color: "red" }}>
        Home Page
      </NavLink>
    </div>
  );
};

export default MainNav;
