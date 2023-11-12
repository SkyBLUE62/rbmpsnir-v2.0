export const IDToIconOpenWeather = (id: number) => {
  switch (id) {
    case id >= 200 && id <= 232:
      return "/assets/images/icons/weather/thunderstorm.svg";
      break;
    case id >= 300 && id <= 321:
      return "/assets/images/icons/weather/drizzle.svg";
      break;
    case id >= 500 && id <= 531:
      return "/assets/images/icons/weather/rain.svg";
      break;
    case id >= 600 && id <= 622:
      return "/assets/images/icons/weather/snow.svg";
      break;
    case id === 800:
      return "/assets/images/icons/weather/clear-day.svg";
      break;
    case id === 801:
      return "/assets/images/icons/weather/partly-cloudy.svg";
      break;
    case id === 802:
      return "/assets/images/icons/weather/cloudy.svg";
    case id === 803 && id === 804:
      return "/assets/images/icons/weather/overcast.svg";
    default:
      break;
  }
};
