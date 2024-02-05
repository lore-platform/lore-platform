import "./global-styles.scss";
import { Navbar } from "./lore_components/Navbar";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <div className="py-7 px-10 h-dvh">
        <Navbar />
        <h1>Homepage</h1>
        <Login />
      </div>
    </>
  );
}

export default App;
