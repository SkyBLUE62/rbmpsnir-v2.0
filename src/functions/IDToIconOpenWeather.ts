export const IDToIconOpenWeather = (id: number) => {
  if (id >= 200 && id <= 232) {
    return "/assets/images/icons/weather/thunderstorm.svg";
  } else if (id >= 300 && id <= 321) {
    return "/assets/images/icons/weather/drizzle.svg";
  } else if (id >= 500 && id <= 531) {
    return "/assets/images/icons/weather/rain.svg";
  } else if (id >= 600 && id <= 622) {
    return "/assets/images/icons/weather/snow.svg";
  } else if (id === 800) {
    return "/assets/images/icons/weather/clear-day.svg";
  } else if (id === 801) {
    return "/assets/images/icons/weather/partly-cloudy-day.svg";
  } else if (id === 802) {
    return "/assets/images/icons/weather/cloudy.svg";
  } else if (id === 803 || id === 804) {
    return "/assets/images/icons/weather/overcast.svg";
  } else {
    return "/assets/images/icons/weather/clear-day.svg";
  }
};
