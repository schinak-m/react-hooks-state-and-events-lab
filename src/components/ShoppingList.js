import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items, appClass }) {
  const classNames = `ShoppingList ${appClass}`
  const [selectedCategory, setSelectedCategory] = useState("All")
  const filteredList = items.filter((item) => {
    if(selectedCategory === "All"){
      return true
    } else{
      return item.category === selectedCategory
    }
  })

  function handleChange(event){
    setSelectedCategory(event.target.value)
  }

  return (
    <div className={classNames}>
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
