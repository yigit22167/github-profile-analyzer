import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchRateLimit } from "../services/github";
import Loading from "./common/Loading";
import Error from "./common/Error";

const RateLimit = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["rateLimit"],
    queryFn: () => fetchRateLimit(),
  });
  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="fixed bottom-4 right-4 p-3 bg-gray-800 text-slate-100 rounded-lg">
      <span className="text-sm">
        Remaining API requests: {data.resources.core.remaining} /{" "}
        {data.resources.core.limit}
      </span>
    </div>
  );
};

export default RateLimit;
