import { NavLink } from "react-router-dom";
import s from "./MainNav.module.css";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const MainNav = () => {
  const logIn = useSelector((state) => state.user.isLogedIn);
  return (
    <Navbar bg="primary" variant="dark">
      <Container className={s.container}>
        <Nav className="me-auto">
          <NavLink className={s.link} to={"/"}>
            Home Page
          </NavLink>
          <NavLink className={s.link} to={"/contacts"}>
            Contacts
          </NavLink>
        </Nav>
        {logIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Navbar>
  );
};

export default MainNav;
