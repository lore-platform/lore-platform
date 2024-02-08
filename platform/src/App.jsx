import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./global-styles.scss";
import "./styles/index.scss";
import { Navbar } from "./lore_components/Navbar";
import Breadcrumb from "./lore_components/Breadcrumb";
import { Home, Login, Signup, LoggedIn, PasswordReset } from "./pages";

function useWindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { width, screenSize: getScreenSize(width) };
}

function getScreenSize(width) {
  if (width <= 600) return "small";
  else if (width <= 1024) return "medium";
  else if (width <= 1280) return "large";
  else if (width <= 1536) return "xlarge";
  else return "xxlarge";
}

function App() {
  const { width, screenSize } = useWindowSize();
  console.log(width);
  return (
    <>
      <div className="py-7 px-10 h-dvh">
        <Navbar responsiveMode={screenSize} />
        <Breadcrumb />
        <div className="flex flex-col items-center h-5/6">
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
