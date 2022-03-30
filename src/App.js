import "./App.css";

import { useSelector } from "react-redux";
// import { loaderSelector } from "./redux/selectors/selectors";
import MainNav from "./Components/MainNav/MainNav";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Components/HomePage/HomaPage";
import UserMenu from "./Components/UserMenu/UserMenu";
import AuthNav from "./Components/AuthNav/AuthNav";
import Login from "./Components/Login/Login";
import NewUser from "./Components/NawUser/NewUser";
import UserContacts from "./Components/UserContacts/UserContacts";

const App = () => {
  // const dispatch = useDispatch();
  const logIn = useSelector((state) => state.user.isLogedIn);

  // const isLoading = useSelector(loaderSelector);
  return (
    <>
      <MainNav />
      {logIn ? <UserMenu /> : <AuthNav />}
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route path="/register" activeStyle={{ color: "red" }}>
          <NewUser />
        </Route>

        <Route path={"/contacts"}>
          <UserContacts />
        </Route>
      </Switch>
    </>
  );
};

export default App;
