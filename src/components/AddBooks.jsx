import React from "react";

const AddBooks = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-700 to-gray-900">
      <div className="bg-green-300 shadow-2xl rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
          Add a New Book
        </h1>
        <form className="space-y-6">
          {/* Book Name */}
          <div>
            <label
              htmlFor="bookName"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              placeholder="Enter Book Name"
              className="w-full border border-gray-300 bg-sl rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Author Name */}
          <div>
            <label
              htmlFor="authorName"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              placeholder="Enter Author Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter a brief description"
              rows="4"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm resize-none"
            ></textarea>
          </div>

          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-gray-800 text-sm font-semibold mb-2"
            >
              Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter Category"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
            >
              Add Book
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
