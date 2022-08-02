import { css } from "@emotion/css";
import React, { useState } from "react";

import { useAuthContext } from "context/AuthContext";
import LoginButton from "components/button/LoginButton";
import loginWrapperCSS from "components/login/LoginWrapper";

function AccountPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { destroySession } = useAuthContext();

  const handleLogout = (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    destroySession();
  };

  return (
    <div className={loginWrapperCSS}>
      <h2
        className={css`
          margin-bottom: 20px;
        `}
      >
        My account
      </h2>
      <h2
        className={css`
          margin-bottom: 20px;
          font-size: 15px;
        `}
      >
        Hello {username}!
      </h2>
      <h3>My orders</h3>
      <p
        className={css`
          margin-top: 15px;
          margin-bottom: 40px;
          font-size: 15px;
        `}
      >
        You have not placed any order yet
      </p>
      <LoginButton
        type="submit"
        value="Logout Session"
        onClick={handleLogout}
        margin="0"
      />
    </div>
  );
}

export default AccountPage;
