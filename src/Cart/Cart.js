import React from "react";
import "./Cart.css";
const Cart = (props) => {
  return (
    <div className="con">
      <div className="container">
        <div className="cart">
          <img src={props.photo} alt="" />
          <p>
            <strong>Name:</strong> <i>{props.name}</i>{" "}
          </p>
          <p>
            {" "}
            <strong>Review:</strong> <i>{props.comment}</i>{" "}
          </p>
          <p>
            {" "}
            <strong>Rating:</strong> <i>{props.rating}</i>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
