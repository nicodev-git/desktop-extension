import React, { useState } from "react";
import EmailIcon from "./icons/email";
import AppleIcon from "./icons/apple";
import FaceBookIcon from "./icons/facebook";
import GoogleIcon from "./icons/google";
import InstagramIcon from "./icons/instagram";

import KLoader from "./KLoader";

const LoginOption = ({ Icon, txt, onClick = null }) => (
  <div className="klothed-login-option" onClick={onClick}>
    <div className="klothed-login-option__icon">
      <Icon />
    </div>
    <div className="klothed-login-option__txt">{txt}</div>
  </div>
);

const LoginForm = ({ onSubmit, submitting }) => {
  const onClick = () => {
    // TODO: Form validation

    onSubmit();
  };

  return (
    <div className="klothed-form">
      <input type="text" placeholder="Enter email address"></input>
      <input type="password" placeholder="Enter password"></input>
      <button className="klothed-button block" onClick={onClick}>
        {submitting ? <KLoader /> : "TRY IT ON"}
      </button>
    </div>
  );
};

const SignUpSuggest = () => (
  <>
    <hr />
    <div className="klothed-flex center">
      <span>Don't have an account?&nbsp;&nbsp;</span>
      <a className="klothed-link" href="/">
        SIGN UP
      </a>
    </div>
  </>
);

const KLogin = ({ goTryItOn }) => {
  const [state, setState] = useState("pre-login");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = () => {
    // TODO: API call

    setSubmitting(true);
    setTimeout(function () {
      setSubmitting(false);
      goTryItOn();
    }, 2000);
  };

  return (
    <div className="klothed-ext__login">
      {state === "pre-login" ? (
        <button
          className="klothed-button block"
          onClick={() => setState("choose-login-option")}
        >
          LOG IN
        </button>
      ) : (
        <div className="klothed-content klothed-ext__login__options">
          {state === "choose-login-option" && (
            <>
              <LoginOption
                Icon={EmailIcon}
                txt={"Continue with email"}
                onClick={() => setState("login-form")}
              />
              <LoginOption
                Icon={InstagramIcon}
                txt={"continue with instagram"}
              />
              <LoginOption Icon={FaceBookIcon} txt={"continue with facebook"} />
              <LoginOption Icon={GoogleIcon} txt={"continue with google"} />
              <LoginOption Icon={AppleIcon} txt={"continue with apple"} />
            </>
          )}
          {state === "login-form" && (
            <LoginForm onSubmit={onSubmit} submitting={submitting} />
          )}
          <SignUpSuggest />
        </div>
      )}
    </div>
  );
};

export default KLogin;
