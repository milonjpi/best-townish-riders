import './Login.css';
import React from "react";
import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from './firebase.config';
import { useContext } from 'react';
import { UserContext } from '../../App';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}else {
  firebase.app();
}

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  const handleLogin = () => {
    firebase.auth().signInWithPopup(provider)
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
      console.log(err);
    })
  }

  return (
    <>
        <div className="row">
        <div className="col-md-5 mx-auto">
            {
                newUser ? <SignInForm /> : <LoginForm />
            }
          {newUser ? (
            <p className="mt-3 text-center">
              <small>
                Already Have an Account?{" "}
                  <span
                    onClick={() => setNewUser(!newUser)}
                    className="cursor-pointer text-danger"
                  >
                    Login
                  </span>
              </small>
            </p>
          ) : (
            <p className="mt-3 text-center">
              <small>
                Don't have an account?{" "}
                  <span
                    onClick={() => setNewUser(!newUser)}
                    className="cursor-pointer text-danger"
                  >
                    Create an account
                  </span>
              </small>
            </p>
          )}
          <div className="my-3">
            <p className="or-devider"><span>Or</span></p>
          </div>
          <div className="social-border my-3">
             <p onClick={handleLogin}>Continue with Google</p>
          </div>
          
        </div>
      </div>
      
    </>
  );
};


export default Login;
