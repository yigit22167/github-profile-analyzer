import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center rounded-xl md:w-9/10 px-4 bg-slate-100">
      <IoIosSearch className="text-3xl text-slate-500" />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search user"
        className="text-slate-500 focus:outline-0 font-medium placeholder-slate-500 placeholder:font-medium ml-1.5 py-2.5 text-base w-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
