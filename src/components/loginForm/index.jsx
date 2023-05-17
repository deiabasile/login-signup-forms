import React from "react";
import Input from "../input/index";
import Button from "../button/index";
import classes from "./LoginForm.module.scss";

function LoginForm({
  userName,
  onUserNameInputChange,
  password,
  onPasswordInputChange,
  onLogInButtonClick,
  onSignUpButtonClick,
}) {
  return (
    <div className={classes.container}>
      <form className={classes.formWrapper}>
        <h2>Login</h2>
        <Input
          label="Username:"
          inputValue={userName}
          onInputChange={onUserNameInputChange}
          placeholder="Enter your username"
        />

        <Input
          label="Password:"
          inputValue={password}
          onInputChange={onPasswordInputChange}
          placeholder="Enter your password"
        />
        <Button onButtonClick={onLogInButtonClick} description="Log In" />
        <h6>
          Not Registered Yet?{" "}
          <button type="button" onClick={onSignUpButtonClick}>
            Sign Up
          </button>
        </h6>
      </form>
    </div>
  );
}

export default LoginForm;
