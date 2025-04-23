import React from "react";
import useRepoLanguages from "../../hooks/useRepoLanguages";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateColors } from "../../utils/chartUtils";
import Loading from "../common/Loading";

ChartJS.register(ArcElement, Tooltip, Legend);

const LanguagesChart = ({ reposData }) => {
  // fetch language data and bring total percentages of languages
  const { languagePercentages, isLoading, error } = useRepoLanguages(reposData);

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  // Extract the language names (keys) and their percentages (values) for the chart
  const keys = Object.keys(languagePercentages);
  const values = Object.values(languagePercentages);

  const datasetLabel = "Percentage of Language";
  const data = {
    labels: keys,
    datasets: [
      {
        label: datasetLabel,
        data: values,
        backgroundColor: generateColors(keys.length), // Generate dynamic colors for each language
        hoverOffset: 2,
        borderColor: "#C4B5FD",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center justify-center">
      {/* Title section */}
      <h1 className="text-4xl text-center mb-8 text-indigo-300 font-semibold">
        Language Usage
      </h1>
      {/* Pie chart */}
      <Pie data={data} />
    </div>
  );
};

export default LanguagesChart;
