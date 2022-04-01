import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/userOperation";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import s from "../MainNav/MainNav.module.css";

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
    <Form onSubmit={onFormSubmit} className={s.nav}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          value={loginForm.email}
          onChange={onInputChange}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          value={loginForm.password}
          onChange={onInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Login;
{
  /* <>
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
    </> */
}
