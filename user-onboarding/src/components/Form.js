import React, { useState, useEffect } from "react";

function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const onChange = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    onChange(name, valueToUse);
  };
  return (
    <div>
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group submit">
          <h2>User Form</h2>

          {/* 🔥 DISABLE THE BUTTON */}
          <button disabled>submit</button>

          <div className="errors">
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.firstName}</div>
            <div>{errors.lastName}</div>
            <div>{errors.email}</div>
            <div>{errors.password}</div>
            <div>{errors.termsOfService}</div>
          </div>
        </div>
        <label htmlFor="firstname">
          <input
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={onChange}
          />
        </label>
        <label htmlFor="lastname">
          <input
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={onChange}
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={onChange}
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="text"
            value={values.password}
            onChange={onChange}
          />
        </label>
        <label htmlFor="ToS">
          <input
            name="termsOfService"
            type="checkbox"
            checked={values.termsOfService}
            onChange={onChange}
          />
        </label>
        <button name="submit">Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
