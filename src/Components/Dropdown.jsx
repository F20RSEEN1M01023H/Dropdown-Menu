import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ items, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className=" min-h-screen font-mono  flex flex-col justify-center items-center  m-8 rounded-lg bg-gradient-to-bl from-slate-950 via-gray-600 to-slate-800"
    >
      <h1 className="text-4xl text-white  font-bold mb-4 text-center">
        Drop Down Menu Project
      </h1>
      <div className="border-2 border-white p-6 min-h-[100px] rounded-lg max-w-md backdrop-blur-lg shadow-2xl">
        <button
          className="bg-gray-50 px-2 py-1 font-semibold rounded-lg hover:bg-slate-800 hover:text-white backdrop-blur-lg shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected ? selected : label}
          <span className="ml-2">⬇</span>
        </button>

        {isOpen && (
          <div className="p-2 mt-3 bg-white rounded-lg">
            {items.map((item, index) => (
              <div
                className="my-1 px-2 py-1 bg-gray-700 text-white font-medium  rounded-lg hover:bg-slate-800 "
                key={index}
                onClick={() => handleSelect(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
