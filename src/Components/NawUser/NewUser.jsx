import { useState } from "react";
import { NavLink } from "react-router-dom";

const form = {
  name: "",
  email: "",
  password: "",
};

//  const [state, setState] = useState(stateList);
//  const onLeaveFeedback = (name) => {
//    setState((prevStateList) => ({
//      ...prevStateList,
//      [name]: prevStateList[name] + 1,
//    }));

const NewUser = () => {
  const [userForm, setUserForm] = useState(form);

  const hendlerInputChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ [name]: value });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setUserForm(form);
  };

  return (
    <NavLink to={"/register"}>
      <form onSubmit={onFormSubmit}>
        <label for="name">Enter your name:</label>
        <input
          value={userForm.name}
          type="text"
          id="name"
          name="name"
          onChange={hendlerInputChange}
          required
        />
        <label for="email">Enter your email:</label>
        <input
          value={userForm.email}
          type="email"
          id="email"
          name="email"
          onChange={hendlerInputChange}
          required
        />

        <label for="pwd">Password:</label>
        <input
          value={userForm.password}
          type="password"
          id="pwd"
          name="pwd"
          onChange={hendlerInputChange}
          required
        />
        <button type="button">Submit</button>
      </form>
    </NavLink>
  );
};

export default NewUser;
