"use client";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemData from "./item.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
export default function Week5() {

  const [items, setItems] = useState(itemData.sort((a, b) => a.name >= b.name ? 1 : -1));
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");

  function handleAddItem(item) {
    let newArr = [...items, item].sort((a, b) => a.name >= b.name ? 1 : -1);
    setItems(newArr);
  }


  function onClickSort(itemsSorted) {
    setItems(itemsSorted);
  }

  function handleItemSelect(name) {
    const onlyName = name.split(" ")[0].split(",")[0];
    setSelectedItemName(onlyName);

  }


  function handleMealSelect(mealId) {
    console.log('mealId: ' + mealId);
    setSelectedItemId(mealId);
  }

    return (
      <main className="bg-slate-950 p-2 m-2">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <div className="flex">
            <div className="flex-1 max-w-md m-2">
               <h3 className="text-xl font-bold">Add New Item</h3>
                <NewItem onAddItem={(item) => handleAddItem(item)} />
                <ItemList items={items} onClickSort={onClickSort} onItemSelect = {handleItemSelect} />
            </div>
            <div className="flex-1 max-w-sm m-2">
                <MealIdeas ingredient = {selectedItemName} onMealSelect = {handleMealSelect}/>
            </div>
        </div>
      </main>
    );
  }
