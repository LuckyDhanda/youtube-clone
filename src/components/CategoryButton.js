import React from "react";

const CategoryButton = ({ name }) => {
  return (
    <button className="m-2 px-2 py-1 bg-gray-200 hover:bg-gray-300 transition-colors duration-100 rounded-lg">
      {name}
    </button>
  );
};

export default CategoryButton;
