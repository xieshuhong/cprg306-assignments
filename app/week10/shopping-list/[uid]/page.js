"use client";
import NewItem from "../new-item";
import ItemList from "../item-list";
import { useState } from "react";
import MealIdeas from "../meal-ideas";
import {getItems, addItem} from "../../_services/shopping-list-service";
import { useEffect } from "react";
export default function Week10({params}) {

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState("");
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const loadItems = async () => {
      const items = await getItems(params.uid);
      console.log(items);
      setItems(items);
      setLoading(false);
    };
    loadItems();
  }, []);

  async function handleAddItem(item) {
    const itemId = await addItem(item, params.uid);
    const newItem = {...item, itemId}
    setItems([...items, newItem])
  }


  function onClickSort(itemsSorted) {
    setItems(itemsSorted);
  }

  function handleItemSelect(name) {
    const onlyName = name.split(" ")[0].split(",")[0];
    setSelectedItemName(onlyName);

  }


  function handleMealSelect(mealId) {
    setSelectedItemId(mealId);
  }

    return (
      <main className="bg-slate-950 p-2 m-2">
        <h2 className="text-3xl font-bold mb-4">Shopping List</h2>
        <div className="flex">
            <div className="flex-1 max-w-md m-2">
               <h3 className="text-xl font-bold">Add New Item</h3>
                <NewItem onAddItem={(item) => handleAddItem(item)} />
                {loading ? (
                    <div>Loading...</div>
                  ) : ( <ItemList items={items} onClickSort={onClickSort} onItemSelect = {handleItemSelect} />)}
            </div>
            <div className="flex-1 max-w-sm m-2">
                <MealIdeas ingredient = {selectedItemName} onMealSelect = {handleMealSelect}/>
            </div>
        </div>
      </main>
    );
  }
