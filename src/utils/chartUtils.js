const colorPalette = [
  "#003f5c",
  "#2f4b7c",
  "#665191",
  "#a05195",
  "#d45087",
  "#f95d6a",
  "#ff7c43",
  "#ffa600",
  "#50585c",
  "#406a71",
  "#297e78",
  "#2a8f6f",
  "#4f9e58",
  "#82a837",
  "#bdac0b",
  "#ffa600",
];

export const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    colors.push(colorPalette[i % colorPalette.length]);
  }
  return colors;
};

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
