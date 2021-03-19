import React from "react";

const SignInForm = () => {
  return (
    <form>
      <h4>Create an Account</h4>
      <br/>
      <label for="">Name:</label>
      <input className="form-control" type="text" placeholder="Email Address" />
      <br/>
      <label for="">User Name or Email:</label>
      <input className="form-control" type="text" placeholder="Email Address" />
      <br />
      <label for="">Password:</label>
      <input className="form-control" type="text" placeholder="Password" />
      <br/>
      <label for="">Confirm Password:</label>
      <input className="form-control" type="text" placeholder="Password" />
      <br />
      <input
        className="btn btn-success form-control"
        type="submit"
        value="Create an account"
      />
    </form>
  );
};

export default SignInForm;
