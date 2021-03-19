import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignInForm from "./SignInForm";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
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
        </div>
      </div>
    </>
  );
};


export default Login;
