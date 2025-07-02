import React from "react";
import CategoryButton from "./CategoryButton";

const ButtonList = () => {
  const list = [
    "All",
    "Music",
    "Shark Tank",
    "Podcasts",
    "React",
    "Mixes",
    "Data Structures",
    "Comedy",
    "Java",
    "History",
    "Recently Watched",
    "Popular",
    "Trending",
  ];

  return (
    <div className="flex flex-wrap font-bold text-sm">
      {list.map((category, index) => (
        <CategoryButton key={index} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
