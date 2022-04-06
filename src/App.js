import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import MainNav from "./Components/MainNav/MainNav";
import HomePage from "./Components/HomePage/HomaPage";
import Login from "./Components/Login/Login";
// import NewUser from "./Components/NawUser/NewUser";
import UserContacts from "./Components/UserContacts/UserContacts";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import PublicRoute from "./Components/PablicRoute/PablicRoute";
import { Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import { currentUser } from "./redux/user/userOperation";
import "bootstrap/dist/css/bootstrap.min.css";
import ReviewModal from "./Components/ReviewModal/ReviewModal";

// import InstructionModal from "./Components/InstructionModal/InstructionModal";

const App = () => {
  const dispatch = useDispatch();
  const userToken = useSelector((state) => state.user.token);

  const [modalOpen, setModalOpen] = useState(false);
  const [bookId, setBookId] = useState(null);

  useEffect(() => {
    userToken && dispatch(currentUser(userToken));
  }, []);

  const onModalOpen = () => {
    setModalOpen(true);
    setBookId(12334);
  };

  const onModalClose = () => {
    setModalOpen(false);
    setBookId(null);
  };

  return (
    <>
      <MainNav />

      <Switch>
        <PrivateRoute path={"/contacts"}>
          <UserContacts />
        </PrivateRoute>
        <PublicRoute path={"/login"} isRestricted={true}>
          <Login />
        </PublicRoute>
        <PublicRoute path={"/register"} isRestricted>
          {/* <NewUser /> */}
          <button onClick={onModalOpen}>Резюме</button>
          {modalOpen && (
            <ReviewModal
              bookId={bookId}
              modalOpen={modalOpen}
              onModalClose={onModalClose}
            />
          )}
          {/* <InstructionModal /> */}
        </PublicRoute>
        <PublicRoute path={"/"} exact isRestricted>
          <HomePage />
        </PublicRoute>
      </Switch>
    </>
  );
};

export default App;
