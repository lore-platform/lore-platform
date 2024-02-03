import "./App.css";
import "./global-styles.scss";
import { Navbar } from "./global_components/Navbar";
import { SearchBar } from "./global_components/SearchBar";

function App() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <hr />
      <h1>This is my app</h1>
    </>
  );
}

export default App;
