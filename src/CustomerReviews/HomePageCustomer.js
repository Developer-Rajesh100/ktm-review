import React from "react";
import HomePageReviews from "./HomePageReviews";
import "./HomePageCustomet.css";

const HomePageCustomer = () => {
  return (
    <div className="mt-36 text-4xl font-medium">
      <h1 className="text-center mb-12">
        Customer <span className="text-orange-400">Reviews</span>
      </h1>
      <HomePageReviews></HomePageReviews>
      <div className="custom">
        <a
          className="mx-6 my-5 px-5 py-2 rounded-md text-base hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300"
          href="#"
        >
          See More
        </a>
      </div>
    </div>
  );
};

export default HomePageCustomer;
