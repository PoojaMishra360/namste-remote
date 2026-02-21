import React from 'react';
import ItemList from './ItemList';
const RestroCategory = ({ category, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  const toggleAccordion = () => {
    debugger;
    setOpenIndex(isOpen ? null : index);
  };

  return (
    <div className=" border-gray-200 px-48">
      <div
        className="flex justify-between items-center p-4 cursor-pointer bg-gray-100 hover:bg-gray-200"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">
          {category.title} ({category.itemCards?.length || 0} items)
        </h3>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <ItemList key={category.title} category={category} />
      )}
    </div>
  );
};

export default RestroCategory;