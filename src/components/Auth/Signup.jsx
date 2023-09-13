import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, signup } from "../../Redux/Actions/UserAction";
import { useAlert } from "react-alert";

const Signup = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const userData = {
    fullname,
    email,
    password,
    username,
    phonenumber,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: clearErrors });
    }
  }, [dispatch, error, alert]);

  return (
    <div>
      <h1>Signup</h1>
      <form className="registerForm" onSubmit={submitHandler}>
        <input
          type="text"
          value={fullname}
          placeholder="Full Name"
          required
          onChange={(e) => setFullname(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="@userName"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Phone Number 10 digit only"
          required
          value={phonenumber}
          onChange={(e) => setPhonenumber(e.target.value)}
        />

        <button disabled={loading} type="submit">
          {/* <button type="submit"> */}
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
