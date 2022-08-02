import { cx, css } from "@emotion/css";
import React, { useState, useEffect, useRef } from "react";

import H1 from "components/heading/H1";
import TextButton from "components/button/TextButton";
import LoginButton from "components/button/LoginButton";
import FormInput from "components/input/FormInput";
import { useAuthContext } from "context/AuthContext";
import { signup } from "services/auth";
import loginWrapperCSS from "components/login/LoginWrapper";
import formLoginCSS from "components/login/FormLogin";
import formLoginWrapperCSS from "components/login/FormLoginWrapper";

const loginLinkCSS = css`
  margin: 24px;
  text-align: center;
  > a {
    cursor: pointer;
    font-weight: 700;
    margin-left: 5px;
  }
`;

const defaultFormFields = {
  username: "",
  password: "",
  confirmPassword: "",
  email: ""
};

function RegisterPage() {
  const timerRef = useRef(null);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password, confirmPassword, email } = formFields;
  const { createSession } = useAuthContext();
  const [errorMessage, setErrorMessage] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(resetFormFields());
      if (!formFields) return;
      if (password !== confirmPassword) {
        alert("passwords don't match");
        return;
      }
      createSession(user);
      alert("Your registration was successfully submitted!");
      setErrorMessage("required field");
    } catch (error) {
      console.log("error", error);
      sendMessage();
    }
  };

  return (
    <div className={loginWrapperCSS}>
      <H1 title="Create account" />
      <div className={formLoginWrapperCSS}>
        <p>{errorMessage}</p>
        <form className={formLoginCSS} onSubmit={handleSignUp}>
          <FormInput
            label="Name"
            placeholder="name"
            type="text"
            required
            onChange={handleChange}
            name="username"
            value={username}
          />
          <FormInput
            label="Email"
            placeholder="yourname@email.com"
            type="email"
            required
            onChange={handleChange}
            name="email"
            autoComplete="email"
            value={email}
          />
          <FormInput
            label="Password"
            placeholder="password"
            type="password"
            required
            autoComplete="current-password"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <FormInput
            label="Confirm password"
            placeholder="password"
            type="password"
            required
            autoComplete="current-password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
          />

          <LoginButton type="submit" value="Create account" margin="0 auto" />
        </form>

        <TextButton
          className={cx(loginLinkCSS)}
          title="Do you already have an account? "
          link="Sign in"
          url="account/login"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
