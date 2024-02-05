import FormTextBox from "@/lore_components/FormTextBox";

const Login = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center h-4/6">
        <h1 className="text-xl mb-5">Login</h1>
        <div className="flex flex-col lorebg-n800 rounded-2xl justify-center px-6 py-5 w-96">
          <div className="lo-Form-Con flex flex-col gap-y-3.5">
            <FormTextBox
              type="text"
              labelText="Username"
              id="usernameId"
              name="username_text"
            />
            <FormTextBox
              type="password"
              labelText="Password"
              id="passwordId"
              name="[password_text"
            />
          </div>
          {/* Keep the 'Forgot your password?' as a p tag for now :) */}
          <p className="text-sm text-center mt-3">Forgot your password?</p>
        </div>
      </section>
    </>
  );
};

export default Login;
