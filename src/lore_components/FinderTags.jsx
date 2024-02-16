/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const FinderTags = ({ tags, selectedTags, onTagSelectionChange }) => {
  const [currentTags, setCurrentTags] = useState([]);

  useEffect(() => {
    setCurrentTags(tags);
  }, [tags]);

  const toggleTagSelection = (tag) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    onTagSelectionChange(newSelectedTags);
  };

  return (
    <div className="flex gap-x-2 gap-y-4 w-5/6 justify-center items-center flex-wrap">
      {currentTags.map((tag) => (
        <button
          type="button"
          key={tag}
          className={`py-2 px-4 ${
            selectedTags.includes(tag)
              ? "lorebg-p500"
              : "lorebg-n800"
          } text-white font-semibold text-xs rounded-full`}
          onClick={() => toggleTagSelection(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default FinderTags;
