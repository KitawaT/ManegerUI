import React, { useState } from "react";
import { data } from "./data";

function ButtonFilter() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [items, setItems] = useState(data); // ใช้ state เพื่อจัดการข้อมูล

  const filteredData =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const categories = [
    { label: "ทั้งหมด", value: "all" },
    { label: "ผลไม้", value: "fruit" },
    { label: "ผัก", value: "vegetable" },
  ];

  const handleCategoryChange = (id, isChecked) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, category: isChecked ? "fruit" : "vegetable" }
          : item
      )
    );
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat.value
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {filteredData.map((item) => (
        <div key={item.id}>
          <div>
            <img src={item.icon} alt={item.title} />
          </div>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
          <label
            htmlFor={`check-${item.id}`}
            className="bg-gray-100 relative w-20 h-10 rounded-full cursor-pointer inline-block"
          >
            <input
              type="checkbox"
              id={`check-${item.id}`}
              className="sr-only peer"
              onChange={(e) => handleCategoryChange(item.id, e.target.checked)}
              checked={item.category === "fruit"}
            />

            <span
              className="w-8 h-8 bg-rose-300 absolute top-1 left-1 rounded-full transition-all duration-500
        peer-checked:bg-rose-600 peer-checked:translate-x-10"
            ></span>
          </label>
        </div>
      ))}
    </div>
  );
}

export default ButtonFilter;
