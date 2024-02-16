/* eslint-disable react/prop-types */
import { Routes, Route } from "react-router-dom";
import "./global-styles.scss";
import "./styles/index.scss";
import "animate.css";
import { Navbar } from "./lore_components/Navbar";
import Breadcrumb from "./lore_components/Breadcrumb";
import {
  Home,
  Login,
  Signup,
  LoggedIn,
  PasswordReset,
  Finder,
  FinderSearch,
} from "./pages";
import { useWindowSize } from "./reusable/useScreenSize";

function Layout({ children, screenSize }) {
  return (
    <>
      <Navbar responsiveMode={screenSize} />
      <Breadcrumb responsiveMode={screenSize} />
      <div className="flex flex-col items-center h-[90%] w-full">
        {children}
      </div>
    </>
  );
}

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
        <Routes>
          <Route
            path="/"
            element={
              <Layout screenSize={screenSize}>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/login/*"
            element={
              <Layout screenSize={screenSize}>
                <Routes>
                  <Route
                    path="/"
                    element={<Login responsiveMode={screenSize} />}
                  />
                  <Route path="password-reset" element={<PasswordReset />} />
                </Routes>
              </Layout>
            }
          />
          <Route
            path="/logged-in"
            element={
              <Layout screenSize={screenSize}>
                <LoggedIn />
              </Layout>
            }
          />
          <Route
            path="/signup"
            element={
              <Layout screenSize={screenSize}>
                <Signup />
              </Layout>
            }
          />
          <Route
            path="/finder/*"
            element={
              screenSize === "xsmall" || screenSize === "small" ? (
                <>
                  <Routes>
                    <Route
                      path="/"
                      element={<Finder responsiveMode={screenSize} />}
                    />
                    <Route path="search" element={<FinderSearch />} />
                  </Routes>
                </>
              ) : (
                <Layout screenSize={screenSize}>
                  <Routes>
                    <Route
                      path="/"
                      element={<Finder responsiveMode={screenSize} />}
                    />
                    <Route path="search" element={<FinderSearch />} />
                  </Routes>
                </Layout>
              )
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
