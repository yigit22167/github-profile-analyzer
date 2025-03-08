import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search user"
        className="bg-slate-500 text-slate-900 focus:outline-2 focus:outline-slate-400 font-bold placeholder-slate-800 px-6 py-4 text-xl w-full rounded-full"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
