import React from "react";
import HomePageReviews from "./HomePageReviews";
import "./HomePageCustomet.css";
import { Link } from "react-router-dom";

const HomePageCustomer = () => {
  return (
    <div className="mt-36 text-4xl font-medium">
      <h1 className="text-center mb-12">
        Customer <span className="text-orange-400">Reviews</span>
      </h1>
      <HomePageReviews></HomePageReviews>
      <div className="custom">
        <Link to="/reviews">
          <span className="mx-6 my-5 px-5 py-2 rounded-md text-base hover:bg-purple-500 hover:rounded-3xl hover:font-bold hover:text-white bg-orange-300">
            See More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomePageCustomer;
