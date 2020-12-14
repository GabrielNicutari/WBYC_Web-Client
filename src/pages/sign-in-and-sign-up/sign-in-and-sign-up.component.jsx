import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sing-up/sing-up.component";

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="login-image">
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  </div>
);

export default SignInAndSignUpPage;
