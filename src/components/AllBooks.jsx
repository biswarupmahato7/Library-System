/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Book from "./Book";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const AllBooks = ({ booksData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(booksData);
  const categories = ["All", "Fiction", "Horror", "Science", "Literature", "Adventure", "Fantasy"]; // Example categories

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filterBooksByCategory = (category) => {
    if (category === "All") {
      setFilteredBooks(booksData);
    } else {
      const filtered = booksData.filter((book) => book.category === category);
      setFilteredBooks(filtered);
    }
    setIsDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <div className="relative">
      {/* Category Dropdown */}
      <div className="relative inline-block px-6 py-4 z-10">
        <button
          onClick={toggleDropdown}
          className="flex items-center justify-between space-x-2 px-4 py-2 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700 transition duration-300"
        >
          <span>Category</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 transform transition-transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-56 animate-fade-in">
            {categories.map((category, index) => (
              <div
                key={index}
                className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer transition duration-200"
                onClick={() => filterBooksByCategory(category)}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add New Book Button */}
      <div className="flex justify-end px-6 z-10 py-4">
        <Link
          to="/add-book"
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        >
          <span>Add New Book</span>
          <IoIosAddCircleOutline className="text-lg" />
        </Link>
      </div>

      {/* Books Grid */}
      <div className="flex flex-wrap gap-6 justify-center mt-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((singleBookData, id) => (
            <Link to= {`/book-details/${id}`}>
            
             <Book key={id} booksData={singleBookData} />
            </Link>
          ))
        ) : (
          <p className="text-red-500 text-2xl bg-green-400 p-2 rounded-lg mt-4">No books found in this Category !</p>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
