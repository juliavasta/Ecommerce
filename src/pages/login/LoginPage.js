import { cx, css } from "@emotion/css";
import React, { useState, useRef, useEffect } from "react";

import H1 from "components/heading/H1";
import TextButton from "components/button/TextButton";
import LoginButton from "components/button/LoginButton";
import FormInput from "components/input/FormInput";
import { useAuthContext } from "context/AuthContext";
import { signin } from "services/auth";
import loginWrapperCSS from "components/login/LoginWrapper";
import formLoginCSS from "components/login/FormLogin";
import formLoginWrapperCSS from "components/login/FormLoginWrapper";

const loginButtonLinkCSS = css`
  margin-bottom: 24px;
  cursor: pointer;
`;

const loginTextLinkCSS = css`
  margin-top: 24px;
  cursor: pointer;
`;

const resetAccountButtonCSS = css`
  cursor: pointer;
  text-align: right;
`;

function LoginPage() {
  const timerRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const { createSession } = useAuthContext();

  const sendMessage = (e) => {
    e.preventDefault();
    timerRef.current = setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
  };

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await signin({ username, password, email });
      if (!username || !password) return;
      createSession(user);
      setErrorMessage("incorrect token");
    } catch (error) {
      console.log("error", error);
      sendMessage();
    }
  };

  return (
    <div className={loginWrapperCSS}>
      <H1 title="Sign in" />
      <div className={formLoginWrapperCSS}>
        <p>{errorMessage}</p>
        <form className={formLoginCSS} onSubmit={handleLogin}>
          <FormInput
            label="Name"
            placeholder="name"
            type="text"
            required
            onChange={({ target }) => setUsername(target.value)}
            name="username"
            value={username}
          />
          <FormInput
            label="Email"
            placeholder="yourname@email.com"
            type="email"
            required
            onChange={({ target }) => setEmail(target.value)}
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
            onChange={({ target }) => setPassword(target.value)}
            value={password}
          />
          <div className={cx(resetAccountButtonCSS)}>
            <TextButton
              link="Did you forget password?"
              url="reset"
              className={cx(loginButtonLinkCSS)}
            />
          </div>
          <LoginButton type="submit" value="Sign in" margin="0 auto" />
        </form>
        <TextButton
          title="Don't have an account yet? "
          link="Create account"
          url="account/register"
          className={cx(loginTextLinkCSS)}
        />
      </div>
    </div>
  );
}

export default LoginPage;
