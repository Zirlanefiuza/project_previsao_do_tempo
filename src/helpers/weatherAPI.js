const TOKEN = import.meta.env.VITE_TOKEN;
const API_URL1 = 'http://api.weatherapi.com/v1/search.json?lang=pt&key=';

export const searchCities = async (term) => {
  const response = await fetch(`${API_URL1}${TOKEN}&q=${term}`);
  const data = await response.json();
  if (data.length === 0) return window.alert('Nenhuma cidade encontrada');
  return data;
};

const API_URL2 = 'http://api.weatherapi.com/v1/current.json?lang=pt&key=';

export const getWeatherByCity = async (cityURL) => {
  const response = await fetch(`${API_URL2}${TOKEN}&q=${cityURL}`);
  const data = await response.json();
  const { current, location } = data;

  const cityList = {
    name: location.name,
    country: location.country,
    temp: current.temp_c,
    condition: current.condition.text,
    icon: current.condition.icon,
    url: cityURL,
  };
  return cityList;
};
