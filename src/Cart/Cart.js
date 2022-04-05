import React from "react";
import "./Cart.css";
const Cart = (props) => {
  //   const [key, name, comment, rating, photo] = props;
  return (
    <div className="con">
      <div className="container">
        <div className="cart">
          <img src={props.photo} alt="" />
          <p>Name: {props.name}</p>
          <p>Review: {props.comment}</p>
          <p>Rating: {props.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
