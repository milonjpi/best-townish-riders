import React from 'react';

const LoginForm = () => {
    return (
        <form>
        <label for="">Email Address:</label>
        <input className="form-control" type="text" placeholder="Email Address" />
        <br />
        <label for="">Password:</label>
        <input className="form-control" type="text" placeholder="Password" />
        <br />
        <input
          className="btn btn-success form-control"
          type="submit"
          value="Login"
        />
      </form>
    );
};

export default LoginForm;