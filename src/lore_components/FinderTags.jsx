/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const FinderTags = ({ tags }) => {
  const [currentTags, setCurrentTags] = useState([]); // Store current tags in state
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    // Update state whenever the tags prop changes
    setCurrentTags(tags);
  }, [tags]);

  const toggleTagSelection = (tag) => {
    // Update selected tags state based on tag presence
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(newSelectedTags);
  };

  return (
    <div className="flex gap-x-2 gap-y-4 w-5/6 justify-center items-center flex-wrap">
      {currentTags.map((tag) => (
        <button
          type="button"
          key={tag}
          className={`py-2 px-4 ${
            selectedTags.includes(tag) ? "lorebg-p500" : "lorebg-n800"
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
