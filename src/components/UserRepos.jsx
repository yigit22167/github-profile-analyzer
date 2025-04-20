import React from "react";
import RepoCard from "./RepoCard";

const UserRepos = ({ reposData }) => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-4 mb-8 col-span-2 text-indigo-300 font-semibold">
        Repositories
      </h1>
      <div className="sm:max-w-6xl mx-12 grid grid-cols-1 gap-x-8 gap-y-6 mb-12 md:gap-y-10 md:grid-cols-2">
        {reposData
          .filter((repo) => repo.name !== repo.owner.login)
          .map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
      </div>
    </div>
  );
};

export default UserRepos;
