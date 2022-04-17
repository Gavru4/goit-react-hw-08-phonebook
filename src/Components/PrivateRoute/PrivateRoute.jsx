import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Route } from "react-router-dom";

const PrivateRoute = ({ children, path }) => {
  const isLogedIn = useSelector((state) => state.user.isLogedIn);
  return isLogedIn ? (
    <Route path={path}>{children}</Route>
  ) : (
    <Redirect to={"/login"} />
  );
};

export default PrivateRoute;
