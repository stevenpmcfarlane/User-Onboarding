import React, { useState, useEffect } from "react";

function UserForm(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };
  const change = (event) => {
    const { name, value, checked, type } = event.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={change}
          />
        </label>
        <label htmlFor="email">
          <input
            name="email"
            type="email"
            value={values.email}
            onChange={change}
          />
        </label>
        <label htmlFor="password">
          <input
            name="password"
            type="text"
            value={values.password}
            onChange={change}
          />
        </label>
        <label htmlFor="ToS">
          <input
            name="termsOfService"
            type="checkbox"
            checked={values.termsOfService}
            onChange={change}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
export default UserForm;
