import React, { useState } from "react";

function Item({ name, category}) {
  const [inCart, setInCart] = useState(false)
  const classNames = inCart ? "in-cart" : ""
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  function handleClick(){
    setInCart((inCart) => inCart = !inCart)
  }

  return (
    <li className={classNames}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{buttonText}</button>
    </li>
  );
}

export default Item;
