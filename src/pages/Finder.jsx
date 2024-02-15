/* eslint-disable react/prop-types */
import { useState } from "react";
import { CgHeart } from "react-icons/cg";
import FinderTags from "@/lore_components/FinderTags";
import Button from "@/lore_components/Button";

const Finder = ({ responsiveMode }) => {
  const [currentCard, setCurrentCard] = useState(1);

  const handleCardClick = () => {
    setCurrentCard(currentCard + 1);
  };

  return (
    <>
      {/* Card 1 */}
      <div
        className={`${
          currentCard === 1 ? "lorebg-p500" : "hidden"
        } w-full max-w-md h-full rounded-[2.5rem]`}
        id="card1"
        onClick={handleCardClick}
      >
        <div className="h-full flex flex-col justify-evenly items-center">
          <h1 className="text-white font-bold text-3xl text-center w-2/3">
            Hello! I am the Fanfiction Finder
          </h1>
          <p className="font-bold">by LORE Team</p>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className={`${
          currentCard === 2 ? "lore-purple-shadow bg-black" : "hidden"
        } w-full max-w-md h-full rounded-[2.5rem]`}
        id="card2"
        onClick={handleCardClick}
      >
        <div className="h-full flex flex-col justify-evenly items-center">
          <h1
            className={`text-white font-bold text-3xl text-center animate__animated animate__fadeInUp ${
              responsiveMode === "xsmall" ? "w-5/6" : "w-3/4"
            }`}
          >
            I help you find the fanfic of your dreams
          </h1>
          <CgHeart className="lore-text-p300 text-7xl lore-svg-purple-shadow" />
          <p></p>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className={`${
          currentCard === 3 ? "lore-purple-shadow bg-black" : "hidden"
        } w-full max-w-md h-full rounded-[2.5rem]`}
        id="card3"
      >
        <div className="h-full flex flex-col justify-center items-center gap-12">
          <h1
            className={`text-white font-bold text-3xl text-center animate__animated animate__fadeInUp ${
              responsiveMode === "xsmall" ? "w-5/6" : "w-3/4"
            }`}
          >
            Choose your favourite tags
          </h1>
          <FinderTags
            tags={[
              "fluff",
              "angst",
              "hurt/comfort",
              "family",
              "smut",
              "friendship",
              "alternate canon",
              "love",
              "slow burn",
              "violence",
              "happy ending",
              "humour",
              "kissing",
              "coming-of-age",
            ]}
          />
          <button className="rounded-full p-1">
            <Button
              title="Enter"
              className="bg-black font-semibold lore-text-n700 disabled:bg-[#171717]"
              disabled
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Finder;
