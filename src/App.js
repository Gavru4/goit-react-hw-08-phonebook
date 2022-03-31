import "./App.css";
import { useDispatch, useSelector } from "react-redux";
// import { loaderSelector } from "./redux/selectors/selectors";
import MainNav from "./Components/MainNav/MainNav";
import HomePage from "./Components/HomePage/HomaPage";
import UserMenu from "./Components/UserMenu/UserMenu";
import AuthNav from "./Components/AuthNav/AuthNav";
import Login from "./Components/Login/Login";
import NewUser from "./Components/NawUser/NewUser";
import UserContacts from "./Components/UserContacts/UserContacts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PablicRoute/PablicRoute";
import { Switch } from "react-router-dom";
import { useEffect } from "react";
import { currentUser } from "./redux/user/userOperation";

const App = () => {
  const logIn = useSelector((state) => state.user.isLogedIn);
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);

  useEffect(() => {
    userToken && dispatch(currentUser(userToken));
  }, []);

  // const isLoading = useSelector(loaderSelector);
  return (
    <>
      <MainNav />
      {logIn ? <UserMenu /> : <AuthNav />}
      <Switch>
        <PrivateRoute path={"/contacts"}>
          <UserContacts />
        </PrivateRoute>
        <PublicRoute path={"/login"} isRestricted={true}>
          <Login />
        </PublicRoute>
        <PublicRoute path={"/register"} isRestricted>
          <NewUser />
        </PublicRoute>
        {/* <PublicRoute path={"/register"} isRestricted>
        <UserRigester />
      </PublicRoute> */}
        <PublicRoute path={"/"} exact isRestricted>
          <HomePage />
        </PublicRoute>
      </Switch>
    </>
  );
};

export default App;

//  <MainNav />
//       {logIn ? <UserMenu /> : <AuthNav />}
//       <Switch>
//         <Route path={"/"} exact>
//           <HomePage />
//         </Route>
//         <Route path={"/login"}>
//           <Login />
//         </Route>
//         <Route path="/register" activeStyle={{ color: "red" }}>
//           <NewUser />
//         </Route>

//         <Route path={"/contacts"}>
//           <UserContacts />
//         </Route>
//       </Switch>
