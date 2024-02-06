import { Routes, Route } from "react-router-dom";
import "./global-styles.scss";
import "./styles/index.scss";
import { Navbar } from "./lore_components/Navbar";
import { Home, Login, Signup, LoggedIn, PasswordReset } from "./pages";

function App() {
  return (
    <>
      <div className="py-7 px-10 h-dvh">
        <Navbar />
        <div className="flex flex-col justify-center items-center h-4/6">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}>
              <Route path="password-reset" element={<PasswordReset />} />
            </Route>
            <Route path="/logged-in" element={<LoggedIn />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
