import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { newUser } from "../../redux/user/userOperation";
import s from "./NewUser.module.css";
const form = {
  name: "",
  email: "",
  password: "",
};

const NewUser = () => {
  const [userForm, setUserForm] = useState(form);
  const dispatch = useDispatch();

  const hendlerInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(newUser(userForm));
    setUserForm(form);
  };

  return (
    <Form onSubmit={onFormSubmit} className={s.nav}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter your name:</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={hendlerInputChange}
          value={userForm.name}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Enter your email:</Form.Label>
        <Form.Control
          value={userForm.email}
          type="email"
          name="email"
          onChange={hendlerInputChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password:</Form.Label>
        <Form.Control
          value={userForm.password}
          type="password"
          name="password"
          onChange={hendlerInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default NewUser;
