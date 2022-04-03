import React from "react";
import HomePageReviews from "./HomePageReviews";

const HomePageCustomer = () => {
  return (
    <div className="mt-36 text-4xl font-medium">
      <h1 className="text-center">
        Customer <span className="text-orange-400">Reviews</span>
      </h1>
      <HomePageReviews></HomePageReviews>
    </div>
  );
};

export default HomePageCustomer;
