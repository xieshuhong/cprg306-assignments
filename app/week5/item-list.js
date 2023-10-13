"use client";
import Item from "./item";
import { useState } from "react";
import itemData from "./item.json"


export default function ItemList() {
  const [sortBy, setSortBy] = useState("Name");
  const [itemArr, setItemArr] = useState(itemData);

  let categories = Array.from(new Set(itemArr.map(item => item.category))).sort();

  const onClickHandle = (event) => {
    let selectedType = event.target.value;
    setSortBy(selectedType);
    if (selectedType == "Name") {
      setItemArr([...itemArr].sort((a, b) => a.name >= b.name ? 1 : -1));
    } else if (selectedType == "Category") {
      setItemArr([...itemArr].sort((a, b) => a.category >= b.category ? 1 : -1));
    }
  }

  return (
    <>
      <div>
        <label for="sort">Sort by: </label>
        <button className={`${sortBy == "Name" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Name" onClick={onClickHandle}>Name</button>
        <button className={`${sortBy == "Category" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Category" onClick={onClickHandle}>Category</button>
        <button className={`${sortBy == "Grouped Category" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Grouped Category" onClick={onClickHandle}>Grouped Category</button>
      </div>
      <div>
        {
          sortBy !== 'Grouped Category' ?
            (itemArr.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
              />
            ))) :
            (categories.map((category) => {
                    return (
                      <div key={category}>
                        <h3 className="capitalize text-xl">{category}</h3>
                        {itemArr.map((item) => {
                          return (
                                  item.category == category ?
                                  <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                  /> : null
                          )
                        }
                        )}
                      </div>
                    )
                })
            )
        }
      </div>
    </>
  );
}