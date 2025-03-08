import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-slate-800"></div>
      <div className="text-violet-300 animate-pulse font-bold text-2xl mt-6">
        Loading
      </div>
    </div>
  );
};

export default Loading;
