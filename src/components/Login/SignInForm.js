import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./firebase.config";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SignInForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false
  });
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
    if (e.target.name === "confirmPassword") {
      const isCPasswordValid = e.target.value.length > 6;
      const cPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isCPasswordValid && cPasswordHasNumber;
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
      user.password &&
      user.password === user.confirmPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = {...user}
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch(err => {
          const newUserInfo = {...user}
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  const updateUserName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(res => {
      console.log("Update Successfully");
    }).catch(err => {
      console.log(err);
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4>Create an Account</h4>
      <br />
      <label for="">Name:</label>
      <input
        className="form-control"
        name="name"
        onBlur={handleBlur}
        type="text"
        placeholder="Full Name"
        required
      />
      <br />
      <label for="">User Name or Email:</label>
      <input
        className="form-control"
        name="email"
        onBlur={handleBlur}
        type="text"
        placeholder="Email Address"
        required
      />
      <br />
      <label for="">Password:</label>
      <input
        className="form-control"
        name="password"
        onBlur={handleBlur}
        type="password"
        placeholder="Password"
        required
      />
      <br />
      <label for="">Confirm Password:</label>
      <input
        className="form-control"
        name="confirmPassword"
        onBlur={handleBlur}
        type="password"
        placeholder="Confirm Password"
        required
      />
      <br />
      <input
        className="btn btn-success form-control"
        type="submit"
        value="Create an account"
      />
      <p className="text-danger text-center pt-2">{user.error}</p>
      {
        user.success && <p className="text-success text-center pt-2">User Created Successfully</p>
      }
      
    </form>
  );
};

export default SignInForm;
