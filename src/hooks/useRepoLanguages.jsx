import { useQueries } from "@tanstack/react-query";
import { fetchRepoLanguages } from "../services/github";
import {
  calculatePercentage,
  calculateTotalLanguage,
} from "../utils/chartUtils";

const useRepoLanguages = (reposData) => {
  // Extract all language URLs from the repository data
  // this holds the language usage for each repository
  const repoLangUrls = reposData.map((repo) => repo.languages_url);
  const languageQueries = useQueries({
    queries: repoLangUrls.map((url) => ({
      queryKey: ["repoLanguages", url],
      queryFn: () => fetchRepoLanguages(url),
    })),
  });

  const isLoading = languageQueries.some((result) => result.isLoading);
  const error = languageQueries.some((result) => result.error);

  const languageData = languageQueries.map((query) => query.data);

  // Combine language data from all repos {Java: 6954, TypeScript: 342, C#: 10033}
  const totalLanguageCounts = calculateTotalLanguage(languageData);

  // Calculate percentages of languages from total count {Java: 34.36, TypeScript: 10.64, C#:55.0 }
  const languagePercentages = calculatePercentage(totalLanguageCounts);

  return { languagePercentages, isLoading, error };
};

export default useRepoLanguages;
