import React from "react";
import UserInfoCard from "./UserInfoCard";
import UserStats from "./UserStats";
import { useQueries } from "@tanstack/react-query";
import Loading from "./Loading";
import Error from "./Error";
import { fetchUserData, fetchUserRepos } from "../services/githubAPI";
import UserLanguagesChart from "./charts/UserLanguagesChart";
import RepoCard from "./RepoCard";
import UserHeader from "./UserHeader";
import UserRepos from "./UserRepos";

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
    <div className="flex flex-col items-center gap-y-8">
      <UserHeader username={username} />
      <UserInfoCard userData={userData} />
      <UserStats userData={userData} />
      <UserLanguagesChart reposData={reposData} />
      <UserRepos reposData={reposData} />
    </div>
  );
};

export default UserData;
