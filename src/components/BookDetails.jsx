import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { BooksData } from "../utils/mockData";
import { addBook } from "../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { BiBookAdd } from "react-icons/bi";

const BookDetails = () => {
  const { id } = useParams(); // Destructure id from params
  const book = BooksData.find((book) => book.id === Number(id) + 1); // Convert id to a number
  //const [cart, setCart] = useState([]); // State to hold cart items

  const dispatch = useDispatch();

  if (!book) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <h1 className="text-2xl font-semibold text-gray-500">Book not found</h1>
      </div>
    );
  }

  // const handleAddToCart = () => {
  //   setCart((prevCart) => [...prevCart, book]); // Add the current book to the cart
  //   alert(`${book.title} has been added to your cart!`);
  // };

  return (
    <div className="flex justify-center">
      <div className="flex absolute flex-col items-center mt-24 px-6">
        {/* Book Cover */}
        <div className="relative mb-6">
          <img
            src={book.coverImage}
            alt={book.title}
            className="rounded-lg shadow-lg w-80 h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black rounded-lg"></div>
        </div>

        {/* Book Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            {book.title}
          </h1>
          <div className="text-lg text-gray-600 mb-6 text-center">
            <p className="font-medium">
              <span className="text-gray-800 font-bold">Author:</span> {book.author}
            </p>
            <p className="font-medium">
              <span className="text-gray-800 font-bold">Category:</span> {book.category}
            </p>
            <p className="font-medium">
              <span className="text-gray-800 font-bold">Publish Date:</span> {book.publishDate}
            </p>
          </div>
          <p className="text-md text-gray-700 leading-relaxed">
            <span className="text-gray-800 font-bold">Description:</span> {book.description}
          </p>

          {/* Add to Cart Button */}
          <div className="mt-6 text-center">
            <button
              onClick={(e)=> dispatch(addBook(book))}
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}; 

export default BookDetails;
