import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import useCommitActivity from "../../hooks/useCommitActivity";
import Loading from "../common/Loading";
import { getColor } from "../../utils/chartUtils";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

const CommitActivityChart = ({ username, reposData }) => {
  // get 3 most recently updated repos
  const mostRecentRepos = reposData
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 3);

  const { data, isLoading, error } = useCommitActivity(
    username,
    mostRecentRepos
  );

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  // Extract labels (months) from the first repository's stats
  const labels = data[0]?.monthlyStats.map((item) => item.month) || [];

  const datasets = data.map((repo, index) => {
    return {
      label: repo.repoName,
      data: labels.map((label) => {
        const monthStat = repo.monthlyStats.find((m) => m.month === label);
        return monthStat ? monthStat.commits : 0;
      }),
      borderColor: getColor(index),
      backgroundColor: getColor(index),
    };
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  return (
    <div className="w-full max-w-2xl">
      <h1 className="text-4xl text-center mb-8 text-indigo-300 font-semibold">
        Commit Activity (Last 6 Months)
      </h1>
      <Line data={chartData} />
    </div>
  );
};

export default CommitActivityChart;
