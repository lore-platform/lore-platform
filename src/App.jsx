import { Routes, Route } from "react-router-dom";
import "./global-styles.scss";
import "./styles/index.scss";
import "animate.css";
import { Navbar } from "./lore_components/Navbar";
import Breadcrumb from "./lore_components/Breadcrumb";
import { Home, Login, Signup, LoggedIn, PasswordReset, Finder } from "./pages";
import { useWindowSize } from "./reusable/useScreenSize";

function App() {
  const { screenSize } = useWindowSize();

  // 💡 For some reason the responsiveMode does not work for PasswordReset so I made the functions into a resuable code = useWindowSize();
  return (
    <>
      <div
        className={`py-7 h-dvh ${
          screenSize === "xsmall" ? "px-7 w-full overflow-x-hidden" : "px-10"
        }`}
      >
        <Navbar responsiveMode={screenSize} />
        <Breadcrumb responsiveMode={screenSize} />
        <div className="flex flex-col items-center h-5/6 w-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/login"
              element={<Login responsiveMode={screenSize} />}
            >
              <Route path="password-reset" element={<PasswordReset />} />
            </Route>
            <Route path="/logged-in" element={<LoggedIn />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/finder" element={<Finder />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
