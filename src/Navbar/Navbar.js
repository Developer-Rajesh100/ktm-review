import React from "react";

const Navbar = () => {
  return (
    <div className="text-right mr-12 mt-4">
      <a
        className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
        href="/home"
      >
        Home
      </a>
      <a
        className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
        href="/reviews"
      >
        Reviews
      </a>
      <a
        className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
        href="/dashboard"
      >
        Dashboard
      </a>
      <a
        className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
        href="blogs"
      >
        Blogs
      </a>
      <a
        className="mx-6 my-5 px-5 py-2 rounded-md hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
        href="about"
      >
        Abous
      </a>
    </div>
  );
};

export default Navbar;
