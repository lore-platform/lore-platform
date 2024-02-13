import { useState } from "react";
import { FaSearch } from "react-icons/fa";


export const SearchBar = () => {
  // The programming side of the Search Bar
  // 📖 This line is creating a variable searchQuery that starts with an initial value of an empty string, and the setSearchQuery function will be used to update this value as the user types into the search bar.
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // 👾 TESTING PURPOSES : When the user presses the "enter" button, open the query search in a new tab via Google
  const openFakeSearch = (event) => {
    if (event.key === "Enter") {
      // Perform Google search using the searchQuery
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        searchQuery
      )}`;
      window.open(searchUrl, "_blank");
    }
  };

  // The HTML side of the Search Bar
  return (
    <div id="searchBarContainer" className="relative">
      <FaSearch id="searchIcon" className="absolute top-3.5 left-4" />
      <input
        className="lorebg-n700 py-2.5 px-2 pl-10 rounded-full w-full"
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        onKeyDown={openFakeSearch}
      />
    </div>
  );
};
