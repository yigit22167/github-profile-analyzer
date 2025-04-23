import dayjs from "dayjs";

const colorPalette = [
  "#665191",
  "#a05195",
  "#ff7c43",
  "#50585c",
  "#2a8f6f",
  "#003f5c",
  "#f95d6a",
  "#ffa600",
  "#297e78",
  "#4f9e58",
  "#2f4b7c",
  "#406a71",
  "#d45087",
  "#82a837",
  "#bdac0b",
  "#ffa600",
];

export const getColor = (index) =>
  colorPalette[index + ((index + 5) % colorPalette.length)];

// Generates an array of colors from the palette, enough to match the requested number
export const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(colorPalette[i % colorPalette.length]);
  }
  return colors;
};

// Aggregates language usage data across multiple repositories
// Input is array of objects where each object represents language usage in a repo
export const calculateTotalLanguage = (array) =>
  array.reduce((acc, obj) => {
    if (obj) {
      for (const [key, value] of Object.entries(obj)) {
        if (acc[key]) {
          acc[key] += value;
        } else {
          acc[key] = value;
        }
      }
    }
    return acc;
  }, {});

// Converts total language usage to percentage format
// Input object { JavaScript: 2000, Python: 1000 }
// Output object { JavaScript: "66.67", Python: "33.33" }
export const calculatePercentage = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    console.error("Input is not a valid object:", obj);
    return {};
  }
  const total = Object.values(obj).reduce((acc, value) => acc + value, 0);

  const percentages = Object.entries(obj).reduce((acc, [key, value]) => {
    const percentage = ((value / total) * 100).toFixed(2);
    acc[key] = percentage;
    return acc;
  }, {});

  return percentages;
};

// Groups commit data by month (last 6 months) and counts commits per month
// Output: array of objects [{ month: "2024-11", commits: 10 }, ...]
export const groupCommitsByMonth = (commits) => {
  const monthlyData = {};

  // Group commits by their author's commit date month
  commits.forEach((commit) => {
    const month = dayjs(commit.commit.author.date).format("YYYY-MM");
    if (!monthlyData[month]) {
      monthlyData[month] = 0;
    }
    monthlyData[month]++;
  });

  // Ensure all of the last 6 months are represented
  const result = [];
  for (let i = 5; i >= 0; i--) {
    const month = dayjs().subtract(i, "month").format("YYYY-MM");
    result.push({
      month,
      commits: monthlyData[month] || 0,
    });
  }

  return result;
};
