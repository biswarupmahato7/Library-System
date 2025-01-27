/* eslint-disable no-unused-vars */
import React from 'react';
import Search from './Search';
import AllBooks from './AllBooks';

const Home = () => {
  return (
    <div className="">
      {/* Search Component */}
      <div className="text-white">
        <div className="container mx-auto px-4">
          {/* <Search /> */}
        </div>
      </div>

      {/* Welcome Section */}
      <div
        className="mx-auto px-4 flex flex-col justify-center items-center py-12 text-center bg-cover bg-center bg-opacity-30 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          height: '60vh',
        }}
      >
        <h2 className="text-4xl font-bold text-black mb-4 shadow-lg sm:text-5xl md:text-6xl lg:text-8xl break-words">
          Welcome to BookStore
        </h2>
        <p className="text-lg text-black sm:text-xl md:text-2xl lg:text-4xl">
          Read your favorite books and explore new adventures.
        </p>
      </div>
    </div>
  );
};

export default Home;
