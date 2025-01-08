// eslint-disable-next-line no-unused-vars
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-400 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-8 bg-slate-500 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          About Us
        </h1>
        <p className="text-white leading-relaxed text-lg mb-6">
          Welcome to our BookStore! We are passionate about connecting readers
          with their next great adventure. Our mission is to provide a diverse
          collection of books that inspire, educate, and entertain. Whether
          you're looking for a thrilling mystery, an inspiring biography, or a
          cozy romance, we have something for everyone.
        </p>
        <p className="text-white  leading-relaxed text-lg mb-6">
          Our team is dedicated to curating a collection that caters to every
          kind of reader. From timeless classics to modern bestsellers, we
          strive to bring you the best of the literary world. We believe that
          every book has the power to change lives, and we are here to help you
          find the stories that resonate with you.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-white space-y-2">
            <li>A curated collection of diverse genres.</li>
            <li>Affordable prices and exclusive deals.</li>
            <li>Friendly and knowledgeable customer support.</li>
            <li>Convenient online shopping experience.</li>
          </ul>
        </div>
        <div className="mt-8 text-center">
          <p className="text-white  italic">
            "A room without books is like a body without a soul." – Marcus
            Tullius Cicero
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
