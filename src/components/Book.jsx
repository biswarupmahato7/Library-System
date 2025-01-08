import React from 'react';

const Book = (props) => {
  return (
    <div className="max-w-sm rounded  overflow-hidden shadow-lg bg-white border border-gray-200 m-7 hover:scale-95 hover:bg-slate-400 cursor-pointer ">
      {/* Book Cover */}
      <div className="h-48 w-full">
        <img
          src={props.booksData.coverImage}
          alt={props.booksData.title}
          className="h-full w-full object-cover rounded-t"
        />
      </div>

      {/* Book Details */}
      <div className="p-4">
        {/* Title */}
        <h1 className="text-lg font-bold text-gray-800 mb-2">
          {props.booksData.title}
        </h1>

        {/* Author */}
        <h2 className="text-sm text-gray-600 mb-2 italic">
          by {props.booksData.author}
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-sm line-clamp-3">
          {props.booksData.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-4 flex justify-between items-center">
        <span className="text-xs text-gray-500">
          Published: {props.booksData.publishDate}
        </span>
        <span className="text-xs text-black bg-green-400 py-1 px-2 rounded">
          {props.booksData.category}
        </span>
      </div>
    </div>
  );
};

export default Book;
