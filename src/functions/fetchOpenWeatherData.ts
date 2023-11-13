type fetchOpenWeatherData = {
  longitude: number;
  latitude: number;
};

type fetchHistoryLastDay = {
  longitude: number;
  latitude: number;
  start: number;
};

export const fetchOpenWeatherData = async ({
  longitude,
  latitude,
}: fetchOpenWeatherData) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
};

export const fetchHistoryLastDay = async ({
  latitude,
  longitude,
  start,
}: fetchHistoryLastDay) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${latitude}&lon=${longitude}&dt=${start}&exclude=minutely&units=metric&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
    {
      next: { revalidate: 3600 },
    }
  ).then((res) => res.json());
};
