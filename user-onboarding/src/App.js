import "./App.css";
import React, { useState, useEffect } from "react";
import UserForm from "./components/Form";
import * as yup from "yup";
import formSchema from "./validation/formSchema";
import axios from "axios";

const initialUsers = [];
const initialFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: false,
};
const initialFormErrors = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  termsOfService: false,
};

const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors); // object
  const [disabled, setButtonDisabled] = useState(initialDisabled); // boolean

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getUsers = () => {
    // 🔥 STEP 5- IMPLEMENT! ON SUCCESS PUT FRIENDS IN STATE
    //    helper to [GET] all friends from `http://buddies.com/api/friends`
    axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log("there was an error ", error);
      });
  };

  const postNewUser = (newUser) => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        setFormValues(initialFormValues);
      })
      .catch((err) => {
        console.log("there was an error ", err);
      });
  };

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (firstName, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    yup
      .reach(formSchema, firstName)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [firstName]: "",
        }).catch((error) => {
          setFormErrors({
            ...formErrors,
            [firstName]: error.errors[0],
          });
        });
      });

    setFormValues({
      ...formValues,
      [firstName]: value, // NOT AN ARRAY
    });
  };

  const formSubmit = () => {
    const newUser = {
      firstName: formValues.firstName.trim(),
      lastName: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // 🔥 STEP 7- WHAT ABOUT HOBBIES?
      // termsOfService: [].filter(
      //   (hobby) => formValues[hobby]
      // ),
    };
    // 🔥 STEP 8- POST NEW FRIEND USING HELPER
    postNewUser(newUser);
  };

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers();
  }, []);

  // useEffect(() => {
  //   // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
  //   formSchema.isValid(formValues).then((valid) => {
  //     setButtonDisabled(!valid);
  //   });
  // }, [formValues]);

  return (
    <div className="App">
      <UserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {/* {users.map((user) => {
        return <Friend key={user.id} details={user} />;
      })} */}
    </div>
  );
}

export default App;
