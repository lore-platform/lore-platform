import LoreLogo from "../../src/assets/logo.png";
const Home = () => {
  return (
    <div className="flex flex-col h-4/6 items-center justify-center gap-y-9">
      <img src={LoreLogo} alt="LORE Company Logo." className="w-96" />
      <h1>Welcome to the Testing Home page!</h1>
      <p>This is in the development environment!</p>
    </div>
  );
};

export default Home;
