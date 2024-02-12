import { useNavigate } from "react-router-dom";
import LoreLogo from "../../src/assets/logo.png";
import Button from "@/lore_components/Button";
import "animate.css";
const Home = () => {
  const navigate = useNavigate();

  const enterFinder = () => {
    navigate("/finder");
  };

  return (
    <div className="flex flex-col h-4/6 items-center justify-center gap-y-9">
      <img src={LoreLogo} alt="LORE Company Logo." className="w-96 mt-10" />
      <h1>Welcome to the Testing Home page!</h1>
      <p>This is in the development stage!</p>
      <button
        className="rounded-full p-2 animate__animated animate__fadeInUp"
        id="finderBtn"
        onClick={enterFinder}
      >
        <Button
          title="Unlock Finder's Magic"
          onClick={enterFinder}
          className="bg-black font-bold text-white"
        />
      </button>
    </div>
  );
};

export default Home;
