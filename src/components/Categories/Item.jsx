import React from "react";

export default function item({ item, index }) {
  return (
    <a key={index} className="flex flex-col justify-center items-center gap-y-3 mb-5 text-xs md:text-sm group font-semibold text-center text-gray-800 hover:text-primary hover:bg-violet-200">
      <picture className="flex items-center justify-center w-12 h-12 border rounded-lg border-gray-300 max-w-full overflow-hidden gap-x-4">
        <img src={item.image} alt={item.title} />
      </picture>
      <span className="tracking-tight">{item.title}</span>
    </a>
  );
}
