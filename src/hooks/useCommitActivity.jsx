// hooks/useCommitActivity.js
import { useQuery } from "@tanstack/react-query";
import { fetchCommits } from "../services/github";
import { groupCommitsByMonth } from "../utils/chartUtils";

const useCommitActivity = (username, mostRecentRepos) => {
  const since = new Date();
  since.setMonth(since.getMonth() - 6);
  const until = new Date();

  return useQuery({
    queryKey: ["commits", username, mostRecentRepos],
    queryFn: async () => {
      const commitResponses = await Promise.all(
        mostRecentRepos.map((repo) =>
          fetchCommits(
            username,
            repo.name,
            since.toISOString(),
            until.toISOString()
          )
        )
      );

      // Combine repo names with their respective monthly commit stats
      return mostRecentRepos.map((repo, index) => ({
        repoName: repo.name,
        monthlyStats: groupCommitsByMonth(commitResponses[index] || []),
      }));
    },
    enabled: !!username && mostRecentRepos.length > 0,
  });
};

export default useCommitActivity;
