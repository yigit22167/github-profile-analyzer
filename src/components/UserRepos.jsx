import React, { useState } from "react";
import RepoCard from "./RepoCard";

const UserRepos = ({ reposData }) => {
  const [sortCriteria, setSortCriteria] = useState("stars"); // sort by stars as default

  const sortRepos = (repos) => {
    switch (sortCriteria) {
      case "stars":
        return repos.sort((a, b) => b.stargazers_count - a.stargazers_count);
      case "forks":
        return repos.sort((a, b) => b.forks_count - a.forks_count);
      case "updated":
        return repos.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );
      default:
        return repos;
    }
  };

  const sortedRepos = sortRepos(reposData);

  return (
    <div>
      <h1 className="text-4xl text-center mt-4 mb-8 col-span-2 text-indigo-300 font-semibold">
        Public Repositories
      </h1>

      {/* Sorting Dropdown */}
      <div className="mb-6 text-center">
        <label
          htmlFor="sort"
          className="mr-2 text-lg text-slate-100 font-semibold"
        >
          Sort By:
        </label>
        <select
          id="sort"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
          className="w-56 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ease-in-out shadow-sm"
        >
          <option value="stars">Stars</option>
          <option value="forks">Forks</option>
          <option value="updated">Recently Updated</option>
        </select>
      </div>

      {/* Repo Cards */}
      <div className="sm:max-w-6xl mx-12 grid grid-cols-1 gap-x-8 gap-y-6 mb-12 md:gap-y-10 md:grid-cols-2">
        {sortedRepos
          .filter((repo) => repo.name !== repo.owner.login)
          .map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
      </div>
    </div>
  );
};

export default UserRepos;
