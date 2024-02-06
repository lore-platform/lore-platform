//  -----> Imports <-----
// import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import FormTextBox from "@/lore_components/FormTextBox";
import Button from "@/lore_components/Button";
import ErrorMessage from "@/lore_components/ErrorMessage";

//  -----> Actual Component <-----

const PasswordRest = () => {
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [emailError, setEmailError] = useState(false);

  const settingEmail = (event) => {
    setEmail(event.target.value);
  };

  const successPopup = () => {
    if (email.trim() === "") {
      setEmailError(true);
      setErrorMsg("Please enter your email");
    } else if (!email.includes("@") || !email.includes(".com")) {
      setErrorMsg("Please insert a valid email address");
      setEmailError(true);
    } else {
      alert("Thank you, we will send an email to " + email + " soon!");
      setEmailError(false);
    }
  };

  const enterKey = (event) => {
    if (event.key === "Enter") {
      if (email.trim() === "") {
        setEmailError(true);
        setErrorMsg("Please enter your email");
      } else if (!email.includes("@") || !email.includes(".com")) {
        setErrorMsg("Please insert a valid email address");
        setEmailError(true);
      } else {
        alert("Thank you, we will send an email to " + email + " soon!");
        setEmailError(false);
      }
    }
  };
  return (
    <>
      <h1 className="text-xl mb-5 text-center">Password Reset</h1>
      <div className="flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96">
        <div className="flex flex-col gap-y-4 items-center w-full">
          <FormTextBox
            ErrorHandlingEnabled
            type="text"
            labelText="Email"
            id="emailId"
            name="email_text"
            value={email}
            onChange={settingEmail}
            onKeyDown={enterKey}
            error={emailError}
          />
          {emailError ? <ErrorMessage message={errorMsg} /> : null}
          <Button
            title="Enter"
            className="w-4/6 hover:font-normal lorebg-n500 text-white hover:lore-text-n800 hover:bg-white transition duration-300"
            onClick={successPopup}
          />
        </div>
      </div>
    </>
  );
};

export default PasswordRest;
