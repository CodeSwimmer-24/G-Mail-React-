import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { provider, auth } from "./firebase";
import { login } from "./features/userSlice";
function Login() {
  const dispatch = useDispatch();
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <div className="login___container">
        <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
        <Button variant="contained" color="primary" onClick={signIn}>
          Log in
        </Button>
      </div>
    </div>
  );
}

export default Login;
