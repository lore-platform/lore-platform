//  -----> Imports <-----
// import { useNavigate, Link, useLocation } from "react-router-dom";
import { useState } from "react";

import FormTextBox from "@/lore_components/FormTextBox";
import Button from "@/lore_components/Button";

//  -----> Actual Component <-----

const PasswordRest = () => {
  const [email, setEmail] = useState("");

  const successPopup = () => {
    alert("Thank you, we will send an email to " + email + " soon!");
  };

  return (
    <>
      <h1 className="text-xl mb-5 text-center">Password Reset</h1>
      <div className="flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96">
        <div className="flex flex-col gap-y-4 items-center w-full">
          <FormTextBox
            type="text"
            labelText="Email"
            id="emailId"
            name="email_text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
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
