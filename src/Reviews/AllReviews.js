import React from "react";
import Cart from "../Cart/Cart";
import "./AllReview.css";
const AllReviews = () => {
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
        "https://media.istockphoto.com/photos/young-handsome-man-with-beard-wearing-casual-sweater-standing-over-picture-id1212702108?k=20&m=1212702108&s=612x612&w=0&h=ZI4gKJi2d1dfi74yTljf4YhulA1nfhD3dcUFGH-NUkY=",
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
  const SecondThreeReviews = [
    {
      id: 1,
      name: "Gary L. Rogers",
      reviewComment:
        "My Favourite Bike My lovely Dreams one and only adventure bike",
      rating: 5.0,
      photo:
        "https://cdn.xxl.thumbs.canstockphoto.com/handsome-happy-man-posing-on-the-beach-stock-image_csp15379764.jpg",
    },
    {
      id: 2,
      name: "Clarence A. Spitzer",
      reviewComment:
        "Best performance and adventure tourer bike value for money.Best features in every corner abs, Cornering abs, Quickshifter+, Mtc, Etc.",
      rating: 4.9,
      photo:
        "https://image.shutterstock.com/image-photo/smiling-mature-man-wearing-spectacles-260nw-1432699253.jpg",
    },
    {
      id: 3,
      name: "Jerry A. Dancy",
      reviewComment:
        "Best bike than himalayan if you have budget blindly go for it.Best power best tourer best looking is ktm adv 390.",
      rating: 5.0,
      photo:
        "https://media.istockphoto.com/photos/happy-middle-aged-male-using-latest-technology-picture-id491665687?k=20&m=491665687&s=170667a&w=0&h=-XWVcUhNHdFuMjahkaqcWTrQyn9kUgfIO2CDwv4o_h8=",
    },
  ];
  return (
    <div>
      <div className="review">
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
      <div className="review">
        {SecondThreeReviews.map((Reviews) => (
          <Cart
            key={Reviews.id}
            name={Reviews.name}
            comment={Reviews.reviewComment}
            rating={Reviews.rating}
            photo={Reviews.photo}
          ></Cart>
        ))}
      </div>
    </div>
  );
};

export default AllReviews;
