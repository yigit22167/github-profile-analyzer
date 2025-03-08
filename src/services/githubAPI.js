import axios from "axios";

const BASE_URL = "https://api.github.com/users";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("An error has occured.");
  }
};

export const fetchUserRepos = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("An error has occured.");
  }
};

export const fetchUserRepoLanguages = async (repoUrl) => {
  try {
    const response = await axios.get(`${repoUrl}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("An error has occured.");
  }
};

// export const fetchUserCommitActivity = async () => {
//   try {
//     const response = await axios.get(
//       `https://api.github.com/repos/yigit22167/yigit22167/stats/commit_activity`,
//       {
//         headers: {
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("An error has occured.");
//   }
// };
