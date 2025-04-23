import React from "react";
import { TbGitFork } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";

const RepoCard = ({ repo }) => {
  return (
    <div className="border h-48 overflow-y-auto scroll-wrapper border-slate-700 flex flex-col p-4 rounded-xl bg-slate-800 cursor-pointer hover:-translate-y-1 transition delay-100 duration-250 ease-in-out hover:scale-101">
      <div className="flex w-full justify-between items-center mb-2">
        <a href={repo.html_url} target="_blank">
          <h1 className="text-lg underline text-violet-400">{repo.name}</h1>
        </a>
        <div className="flex gap-x-4">
          <div className="flex items-center">
            <TbGitFork className="text-lg mr-1 text-indigo-400" />
            <p className="text-lg text-indigo-400">{repo.forks}</p>
          </div>
          <div className="flex items-center">
            <FaRegStar className="text-lg mr-1 text-fuchsia-300" />
            <p className="text-lg text-fuchsia-300">{repo.stargazers_count}</p>
          </div>
        </div>
      </div>
      {repo.description && (
        <p className="text-violet-200">{repo.description}</p>
      )}
    </div>
  );
};

export default RepoCard;
