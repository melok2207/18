import axios from 'axios';

export const fetchWeather = async (city) => {
  const key = 'YOUR_API_KEY';
  const url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&lang=uk`;
  const response = await axios.get(url);
  return response.data;
};
