import React from "react";
import UserInfoCard from "./UserInfoCard";
import UserStats from "./UserStats";
import Loading from "./common/Loading";
import Error from "./common/Error";
import LanguagesChart from "./charts/LanguagesChart";
import UserHeader from "./UserHeader";
import UserRepos from "./UserRepos";
import CommitActivityChart from "./charts/CommitActivityChart";
import useUserData from "../hooks/useUserData";

const UserData = ({ username }) => {
  // Use the custom hook to fetch user data and repositories
  const { userData, reposData, isLoading, error } = useUserData(username);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  // return message if there's no data
  if (!userData || !reposData) return <p>No data available</p>;

  return (
    <div className="flex flex-col items-center mx-auto w-full max-w-4xl gap-y-8">
      {/* Header */}
      <UserHeader username={username} />

      {/* User information card */}
      <UserInfoCard userData={userData} />

      {/* User statistics data (followers, following etc.) */}
      <UserStats userData={userData} />

      {/* Pie chart showing language usage across user's repos */}
      <LanguagesChart reposData={reposData} />

      {/* commit activity of most recently updated 3 repos of the user  */}
      <CommitActivityChart username={username} reposData={reposData} />

      {/* list of user repositories */}
      <UserRepos reposData={reposData} />
    </div>
  );
};

export default UserData;
