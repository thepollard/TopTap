import React from "react";
import './auth-form.css';

const AuthForm = ({ user, onChange, onSubmit }) => {
  return (
    <div className="auth-form">
      <form onSubmit={onSubmit} autoComplete="off" className="form-group">
        <h1 className="info">Create an account to use TopTap</h1>
        <div className="form-first">
          <label>First Name:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            value={user.firstName}
            onChange={onChange}
            name="firstName"
            required
          />
        </div>
        <div className="form-last">
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            value={user.lastName}
            onChange={onChange}
            name="lastName"
            required
          />
        </div>{" "}
        <div className="form-email">
          <label>Email:</label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email-input"
            value={user.email}
            onChange={onChange}
            name="email"
            required
          />
        </div>{" "}
        <div className="form-pass">
          <label>Password:</label>
          <br />
          <input
            type="password"
            className="form-control"
            id="password-input"
            value={user.password}
            onChange={onChange}
            name="password"
            min="0"
            required
          />
        </div>
        <div>
          <button type="submit" className="btn-primary" onSubmit={onSubmit}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
