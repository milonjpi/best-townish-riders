import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    error: "",
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (
      user.email &&
      user.password
    ) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(res => {
        const {displayName} = res.user;
        const loginUser = {
            isLoggedIn : true,
            displayName : displayName
        }
        setLoggedInUser(loginUser);
        history.replace(from);
      })
      .catch(err => {
        const newUserInfo = {...user}
        newUserInfo.error = err.message;
        setUser(newUserInfo);
      });
    }
    e.preventDefault();
  };
    return (
        <form onSubmit={handleSubmit}>
        <label for="">Email Address:</label>
        <input className="form-control" name="email" onBlur={handleBlur} type="text" placeholder="Email Address" />
        <br />
        <label for="">Password:</label>
        <input className="form-control" name="password" onBlur={handleBlur} type="password" placeholder="Password" />
        <br />
        <input
          className="btn btn-success form-control"
          type="submit"
          value="Login"
        />
        <p className="text-danger text-center pt-2">{user.error}</p>
      </form>
    );
};

export default LoginForm;