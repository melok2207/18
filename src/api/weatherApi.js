export const fetchWeather = async (city) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    location: {
      name: "Kyiv",
      country: "Ukraine",
      lat: 50.45,
      lon: 30.52
    },
    current: {
      temp_c: 22,
      condition: {
        text: "Хмарно"
      }
    }
  };
};
