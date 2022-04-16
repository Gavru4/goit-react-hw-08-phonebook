import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

const PublicRoute = ({ isRestricted, children, path, exact }) => {
  const isLogedIn = useSelector((state) => state.user.isLogedIn);
  console.log(path);

  return isLogedIn && isRestricted ? (
    <Redirect to={"/contacts"} />
  ) : (
    <Route path={path} exact={exact}>
      {children}
    </Route>
  );
};

export default PublicRoute;
