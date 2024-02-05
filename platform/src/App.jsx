import { Routes, Route } from "react-router-dom";
import "./global-styles.scss";
import { Navbar } from "./lore_components/Navbar";
// import Login from "./pages/Login";
import { Home, Login, Signup } from "./pages";

function App() {
  return (
    <>
      <div className="py-7 px-10 h-dvh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
