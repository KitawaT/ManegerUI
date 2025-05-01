import React, { useState } from 'react';

const data = [
  { id: 1, category: 'fruit', name: 'Apple' },
  { id: 2, category: 'fruit', name: 'Banana' },
  { id: 3, category: 'vegetable', name: 'Carrot' },
  { id: 4, category: 'vegetable', name: 'Broccoli' },
];

function ButtonFilter() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredData = selectedCategory === 'all'
    ? data
    : data.filter(item => item.category === selectedCategory);

  const categories = [
    { label: 'ทั้งหมด', value: 'all' },
    { label: 'ผลไม้', value: 'fruit' },
    { label: 'ผัก', value: 'vegetable' }
  ];

  return (
    <div className="p-4">
      <div className="flex gap-2 mb-4">
        {categories.map(cat => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`px-4 py-2 rounded border ${
              selectedCategory === cat.value
                ? 'bg-blue-500 text-white'
                : 'bg-white text-black hover:bg-gray-100'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ButtonFilter;
