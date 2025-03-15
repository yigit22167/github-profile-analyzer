import React from "react";

const UserStats = ({ userData }) => {
  return (
    <div className="flex text-nowrap flex-col font-semibold w-1/2 justify-center sm:flex-row sm:gap-x-12 text-slate-400 xs:p-4">
      <div className="flex flex-col items-center">
        <h1 className="border-b mb-2">FOLLOWING</h1>
        <p className="text-3xl text-violet-400">{userData.following}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="border-b mb-2">FOLLOWERS</h1>
        <p className="text-3xl text-violet-400">{userData.followers}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="border-b mb-2">PUBLIC REPOS</h1>
        <p className="text-3xl text-violet-400">{userData.public_repos}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="border-b mb-2">PUBLIC GISTS</h1>
        <p className="text-3xl text-violet-400">{userData.public_gists}</p>
      </div>
    </div>
  );
};

export default UserStats;
