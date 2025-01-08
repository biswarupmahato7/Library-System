import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { BooksData } from "../utils/mockData";
import Book from "./Book"; // Assuming you have a Book component to display each book

const Search = () => {
  const [searchText, setSearchTxt] = useState("");
  const [filteredBook, setFilteredBook] = useState([]);
  const [isSearchActive, setIsSearchActive] = useState(false);

  function handleSearch() {
    if (searchText.trim() === "") {
      // If search text is empty, set filtered books to an empty array and activate search
      setFilteredBook([]);
      setIsSearchActive(true);
    } else {
      // Otherwise, filter the books based on the search text
      const searchResult = BooksData.filter((book) =>
        book.title.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBook(searchResult);
      setIsSearchActive(true);
    }
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* Search Bar */}
      <div className="flex mt-16 items-center gap-2 bg-gray-800 p-3 rounded-lg shadow-md w-full max-w-md">
        <input
          onChange={(e) => setSearchTxt(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search..."
          className="flex-grow bg-transparent text-white text-lg p-2 outline-none placeholder-gray-400"
        />
        <button
          className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition duration-300"
          onClick={handleSearch}
        >
          <FaSearch className="text-white text-xl" />
        </button>
      </div>

      {/* Search Results */}
      {isSearchActive && (
        <div className="flex flex-wrap gap-6 justify-center mt-6 w-full">
          {filteredBook.length > 0 ? (
            filteredBook.map((book, id) => (
              <Book key={id} booksData={book} />
            ))
          ) : (
            <p className="text-gray-500 mt-4">No books found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
