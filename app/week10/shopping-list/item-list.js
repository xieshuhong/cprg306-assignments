"use client";
import Item from "./item";
import { useState } from "react";


export default function ItemList({items, onClickSort, onItemSelect}) {


  const [sortBy, setSortBy] = useState("Name");
  // get different categories and sort in ascending order
  // if (items && items.length) {
    let categories = Array.from(new Set(items.map(item => item.category))).sort();
  // }

  const onClickHandle = (event) => {
    let selectedType = event.target.value;
    setSortBy(selectedType);
    if (selectedType == "Name") {
      items.sort((a, b) => a.name.localeCompare(b.name))
    } else if (selectedType == "Category") {
      items.sort((a, b) => a.category.localeCompare(b.category))
    }
     onClickSort(items)
  }


  return (
    <>
      <div className="mt-4">
        <label for="sort">Sort by: </label>
        <button className={`${sortBy == "Name" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Name" onClick={onClickHandle}>Name</button>
        <button className={`${sortBy == "Category" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Category" onClick={onClickHandle}>Category</button>
        <button className={`${sortBy == "Grouped Category" ? 'bg-orange-500' : 'bg-orange-700'} p-1 m-2 w-28`} value="Grouped Category" onClick={onClickHandle}>Grouped Category</button>
      </div>
      <div>
        {
          sortBy !== 'Grouped Category' ?
            (items && items.length && items.map((item, index) => (
              <Item
                key={index}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={() => onItemSelect(item.name)}
              />
            ))) :
            (categories && categories.map((category) => {
                    return (
                      <div key={category}>
                        <h3 className="capitalize text-xl">{category}</h3>
                        {items.map((item) => {
                          return (
                                  item.category == category ?
                                  <Item
                                    key={item.id}
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                    onSelect={() => onItemSelect(item.name)}
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