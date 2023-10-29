"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemData from "./item.json";
import { useState } from "react";
export default function Week6() {

  const [items, setItems] = useState(itemData);

  function handleAddItem(item) {
    let newArr = [...items, item].sort((a, b) => a.name >= b.name ? 1 : -1);
    setItems(newArr);
  }


  function onClickSort(itemsSorted) {
    setItems(itemsSorted);
  }

    return (
      <main className="bg-slate-950 p-2 m-2">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
          <h3 className="text-xl font-bold">Add New Item</h3>
          <NewItem onAddItem={(item) => handleAddItem(item)} />
          <ItemList items={items} onClickSort={onClickSort} />
        </div>
      </main>
    );
  }
