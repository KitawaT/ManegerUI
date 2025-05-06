import React, { useState } from "react";
import { data } from "./data";

function ButtonFilter() {
  // ตั้งค่าเริ่มต้นเป็น "all" สำหรับ selectedCategory
  const [selectedCategory, setSelectedCategory] = useState("all");

  // ตั้งค่าเริ่มต้นให้ category ของ items เป็น "active" แทน "all"
  const [items, setItems] = useState(
    data.map((item) => ({ ...item, category: "active" }))
  );

  const filteredData =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const categories = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Inactive", value: "inactive" },
  ];

  const handleCategoryChange = (id, isChecked) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, category: isChecked ? "active" : "inactive" }
          : item
      )
    );
  };

  return (
    <>
      <div>
        <div className="p-4 flex justify-center items-center">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-4 py-2 rounded-full border font-bold cursor-pointer ${
                  selectedCategory === cat.value
                    ? "bg-[#f35b56] text-[#110921]"
                    : "bg-[#2f354b] text-gray-50 hover:text-gray-400"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-3 gap-4 bg-[#1f2535] rounded-2xl p-3 outline-red-50 outline-1 mb-4"
            >
              {/* พื้นที่สำหรับ icon */}
              <div className="flex justify-center items-center col-span-1">
                <img src={item.icon} alt={item.title} className="max-w-full max-h-full" />
              </div>

              {/* พื้นที่สำหรับ title และ text */}
              <div className="flex flex-col justify-center col-span-2">
                <h1 className="text-4xl font-bold text-white break-words">{item.title}</h1>
                <p className="text-sm text-gray-400 break-words">{item.text}</p>
              </div>

              <div className="flex justify-center items-center col-span-1">
                <button
                  className="bg-[#f35b56] text-white px-4 py-2 rounded-full font-bold mr-2"
                  onClick={() =>
                    setItems((prevItems) =>
                      prevItems.filter((i) => i.id !== item.id)
                    )
                  }
                >
                  Remove
                </button>
              </div>
              <div></div>
              <div>
                <label
                  htmlFor={`check-${item.id}`}
                  className={`relative w-20 h-10 rounded-full cursor-pointer inline-block ${
                    item.category === "inactive" ? "bg-[#525868]" : "bg-[#f35957]"
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`check-${item.id}`}
                    className="sr-only peer"
                    onChange={(e) =>
                      handleCategoryChange(item.id, e.target.checked)
                    }
                    checked={item.category === "active"}
                  />

                  <span
                    className="w-8 h-8 bg-gray-50 absolute top-1 left-1 rounded-full transition-all duration-500
                  peer-checked:bg-rose-600 peer-checked:translate-x-10"
                  ></span>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ButtonFilter;
