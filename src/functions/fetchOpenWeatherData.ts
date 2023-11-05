type params = {
  longitude: number;
  latitude: number;
};

export const fetchOpenWeatherData = async ({ longitude, latitude }: params) => {
  console.log("new fetch");
  return await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
};
