import apiClient from "./apiClient";

// https://api.github.com/users/{username}
export const fetchUserData = async (username) => {
  const response = await apiClient.get(`/users/${username}`);
  return response.data;
};

// https://api.github.com/users/{username}/repos
export const fetchUserRepos = async (username) => {
  const response = await apiClient.get(`/users/${username}/repos`);
  return response.data;
};

// https://api.github.com/repos/{username}/{repoName}/languages
export const fetchRepoLanguages = async (repoUrl) => {
  const response = await apiClient.get(`${repoUrl}`);
  return response.data;
};

// https://api.github.com/repos/{username}/{reponame}/commits
export const fetchCommits = async (username, repoName, since, until) => {
  const response = await apiClient.get(
    `/repos/${username}/${repoName}/commits`,
    {
      params: { since, until },
    }
  );
  return response.data;
};
