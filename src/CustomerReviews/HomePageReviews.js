import React from "react";
import Cart from "../Cart/Cart";
import "./HomePageReviews.css";
const HomePageReviews = () => {
  const FirstThreeReviews = [
    {
      id: 1,
      name: "Chris D. Crumpler",
      reviewComment:
        "Great bike for tours, Best in this budget with the features (bmw gs310 is an option but maintenance and part availability is an issue).",
      rating: 5.0,
      photo:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "John R. Russell",
      reviewComment:
        "One of the best touring and offroading bike.Best in segment.Before i was riding himalayan.In front of adventure 390 himalayan is look like nothing.",
      rating: 4.5,
      photo:
        "https://www.mantruckandbus.com/fileadmin/_processed_/7/1/csm_Richard_von_Braunschweig_2a0347f46a.jpeg",
    },
    {
      id: 3,
      name: "Henry Connolly",
      reviewComment: "no experience only for my FAVOURITE bike",
      rating: 4.3,
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8&w=1000&q=80",
    },
  ];
  return (
    <div className="side">
      {FirstThreeReviews.map((Reviews) => (
        <Cart
          key={Reviews.id}
          name={Reviews.name}
          comment={Reviews.reviewComment}
          rating={Reviews.rating}
          photo={Reviews.photo}
        ></Cart>
      ))}
    </div>
  );
};

export default HomePageReviews;
