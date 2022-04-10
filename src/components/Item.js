import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false)
const liClass = inCart ? "in-cart" : ""
const buttonText = inCart ? "Remove From Cart" : "Add To Cart"
function addToCart() {
  setInCart(inCart => !inCart)
}
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">{buttonText}</button>
    </li>
  );
}

export default Item;
