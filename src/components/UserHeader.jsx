import React from "react";

const UserHeader = ({ username }) => {
  return (
    <h1 className="text-center text-4xl font-semibold text-white">
      Overview of <span className="text-indigo-300">{username}</span>
    </h1>
  );
};

export default UserHeader;
