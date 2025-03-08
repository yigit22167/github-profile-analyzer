import React from "react";
import UserCard from "./UserCard";
import UserStats from "./UserStats";
import { useQueries, useQuery } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";
import { fetchUserData, fetchUserRepos } from "../services/GithubAPI";
import UserLanguagesChart from "./charts/UserLanguagesChart";
import RepoCard from "./RepoCard";

const UserData = ({ username }) => {
  const results = useQueries({
    queries: [
      {
        queryKey: ["user", username],
        queryFn: () => fetchUserData(username),
        enabled: !!username,
      },
      {
        queryKey: ["repos", username],
        queryFn: () => fetchUserRepos(username),
        enabled: !!username,
      },
    ],
  });

  const userData = results[0].data;
  const reposData = results[1].data;
  const isLoading = results.some((result) => result.isLoading);
  const error = results.some((result) => result.error);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  if (!userData) return <p>No data available</p>;

  return (
    <div className="xl:w-6xl xl:mx-auto mx-12 flex flex-col md:gap-x-8 gap-y-16 mb-16">
      <div>
        <UserCard userData={userData} />
      </div>
      <div>
        <UserStats userData={userData} />
      </div>
      <div>
        <UserLanguagesChart reposData={reposData} />
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl mt-12 text-violet-300 font-bold">
          Repositories
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
        {reposData
          .filter((repo) => repo.name !== repo.owner.login)
          .map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
      </div>
    </div>
  );
};

export default UserData;
