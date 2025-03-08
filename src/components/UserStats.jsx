import React from "react";

const UserStats = ({ userData }) => {
  return (
    <div className="flex items-center flex-col sm:flex-row text-slate-400 justify-between xs:p-4">
      <div className="flex flex-col items-center mr-1 xs:mr-2">
        <h1 className="border-b mb-2">FOLLOWING</h1>
        <p className="text-3xl text-violet-400">{userData.following}</p>
      </div>
      <div className="flex flex-col items-center mr-1 xs:mr-2">
        <h1 className="border-b mb-2">FOLLOWERS</h1>
        <p className="text-3xl text-violet-400">{userData.followers}</p>
      </div>
      <div className="flex flex-col items-center mr-1 xs:mr-2">
        <h1 className="border-b mb-2">PUBLIC REPOS</h1>
        <p className="text-3xl text-violet-400">{userData.public_repos}</p>
      </div>
      <div className="flex flex-col items-center mr-1 xs:mr-2">
        <h1 className="border-b mb-2">PUBLIC GISTS</h1>
        <p className="text-3xl text-violet-400">{userData.public_gists}</p>
      </div>
    </div>
  );
};

export default UserStats;
