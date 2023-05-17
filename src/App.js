import React, { useState } from "react";
import LoginForm from "./components/loginForm/index";
import SignUpForm from "./components/signUpForm/index";

import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [isToggleForm, setIsToggleForm] = useState(false);

  const onFirstNameInputChange = (event) => {
    setFirstName(event.target.value);
  };

  const onLastNameInputChange = (event) => {
    setLastName(event.target.value);
  };

  const onUserNameInputChange = (event) => {
    setUserName(event.target.value);
  };

  const onPasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const onSignupPasswordChange = (event) => {
    setSignupPassword(event.target.value);
  };

  const onPasswordConfirmChange = (event) => {
    setPasswordConfirm(event.target.value);
  };

  function toggleForm() {
    setIsToggleForm(!isToggleForm);
  }

  return (
    <div>
      {!isToggleForm && (
        <LoginForm
          onSignUpButtonClick={toggleForm}
          userName={userName}
          onUserNameInputChange={onUserNameInputChange}
          password={password}
          onPasswordInputChange={onPasswordInputChange}
        />
      )}
      {isToggleForm && (
        <SignUpForm
          firstName={firstName}
          onFirstNameInputChange={onFirstNameInputChange}
          lastName={lastName}
          onLastNameInputChange={onLastNameInputChange}
          onLogInButtonClick={toggleForm}
          email={email}
          onEmailInputChange={onEmailInputChange}
          signupPassword={signupPassword}
          onSignupPasswordChange={onSignupPasswordChange}
          passwordConfirm={passwordConfirm}
          onPasswordConfirmChange={onPasswordConfirmChange}
        />
      )}
    </div>
  );
}

export default App;
