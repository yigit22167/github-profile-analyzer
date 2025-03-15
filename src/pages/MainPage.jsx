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
      {username && <UserData username={username} />}
    </div>
  );
};

export default MainPage;
