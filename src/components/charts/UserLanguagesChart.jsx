import { useQueries } from "@tanstack/react-query";
import React from "react";
import { fetchUserRepoLanguages } from "../../services/githubAPI";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import {
  calculatePercentage,
  calculateTotalLanguage,
  generateColors,
} from "../../utils/chartUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

const UserLanguagesChart = ({ reposData }) => {
  const repoLangUrls = reposData.map((repo) => repo.languages_url);

  const languageQueries = useQueries({
    queries: repoLangUrls.map((url) => ({
      queryKey: ["repoLanguages", url],
      queryFn: () => fetchUserRepoLanguages(url),
    })),
  });

  const languageData = languageQueries.map((query) => query.data);
  const results = calculateTotalLanguage(languageData);
  const percentages = calculatePercentage(results);

  const keys = Object.keys(percentages);
  const values = Object.values(percentages);

  const data = {
    labels: keys,
    datasets: [
      {
        label: "Percentages of Languages",
        data: values,
        backgroundColor: generateColors(keys.length),
        hoverOffset: 2,
        borderColor: "#C4B5FD",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center h-120 xs:p-4 text-slate-400">
      <Pie data={data} />
    </div>
  );
};

export default UserLanguagesChart;
