import React from "react";
import SearchBar from "./SearchBar";
import { IoSearch } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const SearchForm = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center py-24 mb-8">
      <div className="text-center flex items-center py-12 text-4xl text-slate-300">
        <FaGithub className="text-5xl mr-4" />
        Analyze Github User
      </div>
      <form
        className="flex items-center relative justify-center w-xs md:w-md"
        onSubmit={handleSubmit}
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button
          className="cursor-pointer absolute right-1 rounded-full p-3 bg-slate-800 hover:bg-slate-900 transition-all text-white font-bold"
          type="submit"
        >
          <IoSearch className="text-3xl" />
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
