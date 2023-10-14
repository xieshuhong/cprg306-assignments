"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {

  let categories = [
    {label: "produce", value: "produce" },
    {label: "dairy", value: "dairy" },
    {label: "bakery", value: "bakery" },
    {label: "frozen Foods", value: "frozen Foods" },
    {label: "canned Goods", value: "canned Goods" },
    {label: "dry Goods", value: "dry Goods"},
    {label: "beverages", value: "beverages"},
    {label: "snacks", value: "snacks"},
    {label: "household", value: "household"},
    {label: "other", value: "other"}
  ];
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");



  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value))
  }

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }



  return (
    <main className="flex justify-center w-full">
          <form className="bg-slate-900 text-black w-full" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <input 
                        onChange={handleNameChange}
                        placeholder="Item name" 
                        value={name}
                        required className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
                    />
                </div>
                <div className="flex justify-between">
                    <input
                        onChange={handleQuantityChange}
                        type="number" 
                        min="1" 
                        max="99" 
                        value={quantity}
                        required 
                        className="w-20 ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                    />
                    <select value={category} className="ml-1 border-2 border-gray-300 p-2 rounded-lg font-sans" 
                     onChange={handleCategoryChange}>
                        {categories.map((category,index)=>(
                            <option key={index} value={category.value}>{category.label}</option>
                        ))}
                    </select>
            </div>

            <button 
              type="submit" 
              className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                +
            </button>
          </form>
    </main>
  );
}


