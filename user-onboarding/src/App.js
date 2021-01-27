import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/Form";
import * as yup from "yup"
import FormSchema from "./validation/FormSchema"
import axios from 'axios'

const initialUsers = [];
const initialFormValues = {
  name="",
  email="",
  password="",
  termsOfService = false
};

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <UserForm />
    </div>
  );
}

export default App;
