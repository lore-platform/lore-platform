/* eslint-disable react/prop-types */
//  -----> Imports <-----
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import FormTextBox from "@/lore_components/FormTextBox";
import fakeUser from "../assets/fakeuser.json";
import PasswordRest from "./PasswordReset";
import Button from "@/lore_components/Button";
import ErrorMessage from "@/lore_components/ErrorMessage";

//  -----> Actual Component <-----
const Login = ({ responsiveMode }) => {
  // 🕹️ The Programming Logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const settingUsername = (event) => {
    setUsername(event.target.value);
  };
  const settingPassword = (event) => {
    setPassword(event.target.value);
  };

  // ⛔ Error handling: When the username, password or both are wrong, give the textbox an outline of red
  const handleErrors = (storedUsername, storedPassword) => {
    setUsernameError(username !== storedUsername);
    setPasswordError(password !== storedPassword);
  };

  // 🌳 When the user enters the "Enter" key on their keyboard when on the textboxes will log them in
  const getLoggedIn = (event) => {
    if (event.key === "Enter") {
      const { username: storedUsername, password: storedPassword } =
        fakeUser.user;

      if (username === storedUsername && password === storedPassword) {
        navigate("/logged-in");
      } else {
        handleErrors(storedUsername, storedPassword);
      }
    }
  };

  // 🌳 When the user clicks the "Enter" button on the screen, it will log them in
  const buttonLogin = () => {
    const { username: storedUsername, password: storedPassword } =
      fakeUser.user;

    if (username === storedUsername && password === storedPassword) {
      navigate("/logged-in");
    } else {
      handleErrors(storedUsername, storedPassword);
    }
  };

  // 🍒 When you click off the Login page, reset the error messages to false (hiding it)
  useEffect(() => {
    setUsernameError(false);
    setPasswordError(false);
  }, [location.pathname]);

  // HTML part of the component
  return (
    <>
      {location.pathname === "/login" ? (
        <div
          className={`mt-36 max-[600px]:mt-20 ${
            responsiveMode === "small" ? "w-full" : ""
          }`}
        >
          <h1 className="text-xl mb-5 text-center">Login</h1>
          <div
            className={`flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96 ${
              responsiveMode === "small" ? "w-full" : ""
            }`}
          >
            <div className="flex flex-col gap-y-4 items-center w-full">
              <FormTextBox
                ErrorHandlingEnabled
                type="text"
                labelText="Username"
                id="usernameId"
                name="username_text"
                value={username}
                onChange={settingUsername}
                onKeyDown={getLoggedIn}
                error={usernameError}
              />
              <FormTextBox
                ErrorHandlingEnabled
                type="password"
                labelText="Password"
                id="passwordId"
                name="password_text"
                value={password}
                onChange={settingPassword}
                onKeyDown={getLoggedIn}
                error={passwordError}
              />
              {usernameError && !passwordError ? (
                <ErrorMessage message="Incorrect username" />
              ) : passwordError && !usernameError ? (
                <ErrorMessage message="Incorrect password" />
              ) : passwordError && usernameError ? (
                <ErrorMessage message="Incorrect username or password" />
              ) : null}
              <Link
                to={"password-reset"}
                className={`font-normal hover:underline ${
                  responsiveMode === "small" ? "text-sm" : "text-xs"
                }`}
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <Button
            title="Enter"
            className="mt-8 w-full hover:font-normal lorebg-n500 text-white hover:lore-text-n800 hover:bg-white transition duration-300"
            onClick={buttonLogin}
          />
        </div>
      ) : (
        <PasswordRest />
      )}
    </>
  );
};

export default Login;
