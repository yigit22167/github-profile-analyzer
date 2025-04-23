import { useQueries } from "@tanstack/react-query";
import { fetchUserData, fetchUserRepos } from "../services/github";

const useUserData = (username) => {
  const results = useQueries({
    queries: [
      {
        // fetch user profile data
        queryKey: ["user", username],
        queryFn: () => fetchUserData(username),
        enabled: !!username,
      },
      {
        // fetch users repositories
        queryKey: ["repos", username],
        queryFn: () => fetchUserRepos(username),
        enabled: !!username,
      },
    ],
  });

  const isLoading = results.some((result) => result.isLoading);
  const error = results.some((result) => result.error);

  const userData = results[0].data;
  const reposData = results[1].data;

  return {
    userData,
    reposData,
    isLoading,
    error,
  };
};

export default useUserData;
