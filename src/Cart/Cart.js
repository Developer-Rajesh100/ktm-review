import React from "react";

const Cart = (props) => {
  //   const [key, name, comment, rating, photo] = props;
  return (
    <div>
      <img src={props.photo} alt="" />
      <p>Name: {props.name}</p>
      <p>Review: {props.comment}</p>
      <p>Rating: {props.rating}</p>
    </div>
  );
};

export default Cart;
