import React from "react";
import SearchBar from "./SearchBar";
import { IoSearch } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const SearchForm = ({ searchTerm, setSearchTerm, handleSubmit }) => {
  return (
    <div className="flex flex-col items-center mt-32 mb-12">
      <div className="text-center px-4 flex items-center mb-8 text-4xl font-bold text-indigo-300">
        <FaGithub className="shrink-0 mr-3 text-4xl" />
        <h1>Visualize GitHub Profile</h1>
      </div>
      <form
        className="flex items-center justify-center w-xs md:w-md"
        onSubmit={handleSubmit}
      >
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </form>
    </div>
  );
};

export default SearchForm;
