import { useNavigate, Outlet } from "react-router-dom";
import { useState } from "react";

import FormTextBox from "@/lore_components/FormTextBox";
import fakeUser from "../assets/fakeuser.json";

const Login = () => {
  // 🕹️ The Programming Logic
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const settingUsername = (event) => {
    setUsername(event.target.value);
  };
  const settingPassword = (event) => {
    setPassword(event.target.value);
  };

  const getLoggedIn = (event) => {
    if (event.key === "Enter") {
      const { username: storedUsername, password: storedPassword } =
        fakeUser.user;

      if (username === storedUsername && password === storedPassword) {
        navigate("/logged-in");
      } else {
        console.log("Login failed");
      }
    }
  };

  return (
    <>
        <h1 className="text-xl mb-5">Login</h1>
        <div className="flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96">
          <div className="flex flex-col gap-y-3.5 items-center w-full">
            <FormTextBox
              type="text"
              labelText="Username"
              id="usernameId"
              name="username_text"
              value={username}
              onChange={settingUsername}
              onKeyDown={getLoggedIn}
            />
            <FormTextBox
              type="password"
              labelText="Password"
              id="passwordId"
              name="password_text"
              value={password}
              onChange={settingPassword}
              onKeyDown={getLoggedIn}
            />

            {/* Keep the 'Forgot your password?' as a p tag for now :) */}
            <p className="text-sm text-center mt-2">Forgot your password?</p>
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default Login;
