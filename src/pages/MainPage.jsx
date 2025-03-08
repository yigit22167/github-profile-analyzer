import React from "react";
import { useState } from "react";
import UserData from "../components/UserData";
import SearchForm from "../components/SearchForm";

const MainPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername(searchTerm);
    setSearchTerm("");
  };
  return (
    <div className="min-h-screen bg-slate-900 overflow-hidden">
      <SearchForm
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      {username && (
        <h1 className="text-center text-5xl text-slate-200 mb-12">
          Overview of <span className="text-violet-400">{username}</span>
        </h1>
      )}
      {username && <UserData username={username} />}
    </div>
  );
};

export default MainPage;
