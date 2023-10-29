"use client";

import { useState } from "react";

export default function NewEvent() {

    ("Produce", "Dairy", "Bakery", "Meat", 
    "Frozen Foods", "Canned Goods", "Dry Goods", 
    "Beverages", "Snacks", "Household", "Other")

  let categories = [
    {label: "Produce", value: "Produce" },
    {label: "Dairy", value: "Dairy" },
    {label: "Bakery", value: "Bakery" },
    {label: "Frozen Foods", value: "Frozen Foods" },
    {label: "Canned Goods", value: "Canned Goods" },
    {label: "Dry Goods", value: "Dry Goods"},
    {label: "Beverages", value: "Beverages"},
    {label: "Snacks", value: "Snacks"},
    {label: "Household", value: "Household"},
    {label: "Other", value: "Other"}
  ];
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");



  const handleSubmit = (event) => {
    event.preventDefault();

    const newEvent = {
      name,
      quantity,
      category
    };
    alert(`Added item: ${newEvent.name}, quantity: ${newEvent.quantity} category: ${newEvent.category}`);
    setName("");
    setQuantity(1);
    setCategory("Produce");
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
          <form className="p-2 m-4 bg-slate-900 text-black max-w-sm w-full" onSubmit={handleSubmit}>
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
                        {categories.map((category, index)=>(
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


