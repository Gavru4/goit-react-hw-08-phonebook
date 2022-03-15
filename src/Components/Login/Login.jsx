import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/contacts/contactsOperation";

const loginObj = {
  email: "",
  password: "",
};

const Login = () => {
  const [loginForm, setLoginForm] = useState(loginObj);
  const dispatch = useDispatch();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginForm));

    setLoginForm(loginObj);
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={loginForm.email}
          onChange={onInputChange}
          required
        />
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={loginForm.password}
          onChange={onInputChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Login;
