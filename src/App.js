import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "./Components/MainNav/MainNav";
import HomePage from "./Components/HomePage/HomaPage";
import Login from "./Components/Login/Login";
import NewUser from "./Components/NawUser/NewUser";
import UserContacts from "./Components/UserContacts/UserContacts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PablicRoute/PablicRoute";
import { Switch } from "react-router-dom";
import { useEffect } from "react";
import { currentUser } from "./redux/user/userOperation";
import "bootstrap/dist/css/bootstrap.min.css";
import ChooseTesting from "./Components/ChooseTesting/ChooseTesting";

const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    userToken && dispatch(currentUser(userToken));
  }, []);

  return (
    <>
      <MainNav />

      <Switch>
        <PublicRoute path={"/"} exact isRestricted={false}>
          {/* <HomePage /> */}
          <ChooseTesting />
        </PublicRoute>
        <PrivateRoute path={"/contacts"}>
          <UserContacts />
        </PrivateRoute>
        <PublicRoute path={"/login"} isRestricted>
          <Login />
        </PublicRoute>
        <PublicRoute path={"/register"} isRestricted>
          <NewUser />
        </PublicRoute>
      </Switch>
    </>
  );
};

export default App;
