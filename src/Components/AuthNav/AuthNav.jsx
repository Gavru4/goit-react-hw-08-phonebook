import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      {/* <NavLink to="/register" exact activeStyle={{ color: "red" }}>
        Register
      </NavLink> */}
      <NavLink to="/login" exact activeStyle={{ color: "red" }}>
        Login
      </NavLink>
      <NavLink to="/register" exact activeStyle={{ color: "red" }}>
        Modal
      </NavLink>
    </div>
  );
};

export default AuthNav;
