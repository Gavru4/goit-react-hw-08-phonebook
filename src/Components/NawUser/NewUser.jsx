import { useState } from "react";
import { useDispatch } from "react-redux";
import { newUser } from "../../redux/user/userOperation";

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
    console.log(userForm);
    e.preventDefault();
    dispatch(newUser(userForm));
    setUserForm(form);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <label>
        <span>Enter your name:</span>
        <input
          value={userForm.name}
          type="text"
          name="name"
          onChange={hendlerInputChange}
          required
        />
        <span>Enter your email:</span>
        <input
          value={userForm.email}
          type="email"
          name="email"
          onChange={hendlerInputChange}
          required
        />

        <span>Password:</span>
        <input
          value={userForm.password}
          type="password"
          name="password"
          onChange={hendlerInputChange}
          required
        />
        <button type="submit">Submit</button>
      </label>
    </form>
  );
};

export default NewUser;
