import React from "react";
import Input from "../input/index";
import Button from "../button/index";
import classes from "./SignUpForm.module.scss";

function SignUpForm({
  firstName,
  onFirstNameInputChange,
  lastName,
  onLastNameInputChange,
  onSignUpButtonClick,
  email,
  onEmailInputChange,
  signupPassword,
  onSignupPasswordChange,
  passwordConfirm,
  onPasswordConfirmChange,
  onLogInButtonClick,
}) {
  return (
    <div className={classes.container}>
      <form className={classes.formWrapper}>
        <h2>Sign Up</h2>
        <Input
          label="First Name:"
          inputValue={firstName}
          onInputChange={onFirstNameInputChange}
          placeholder="Enter your first name"
        />

        <Input
          label="Last Name:"
          inputValue={lastName}
          onInputChange={onLastNameInputChange}
          placeholder="Enter your last name"
        />
        <Input
          label="Email:"
          inputValue={email}
          onInputChange={onEmailInputChange}
          placeholder="Enter your email address"
        />
        <Input
          label="Password:"
          inputValue={signupPassword}
          onInputChange={onSignupPasswordChange}
          placeholder="Enter your password"
        />
        <Input
          label="Confirm Password:"
          inputValue={passwordConfirm}
          onInputChange={onPasswordConfirmChange}
          placeholder="Enter your password"
        />
        <Button onButtonClick={onSignUpButtonClick} description="Sign Up" />
        <h6>
          Already Registered?{" "}
          <button type="button" onClick={onLogInButtonClick}>
            Log in
          </button>
        </h6>
      </form>
    </div>
  );
}

export default SignUpForm;
