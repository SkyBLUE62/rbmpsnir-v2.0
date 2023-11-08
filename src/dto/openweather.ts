type CurrentData = {
  dt: number;
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
};

type DailyData = {
  dt: number;
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pressure: number;
  humidity: number;
  dew_point: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  weather: { id: number; main: string; description: string; icon: string }[];
  clouds: number;
  pop: number;
  uvi: number;
};

type HourlyData = {
  dt: number; // Timestamp
  temp: number; // Température en degrés Celsius
  feels_like: number; // Ressenti de la température en degrés Celsius
  pressure: number; // Pression en hPa (hectopascals)
  humidity: number; // Humidité en pourcentage
  dew_point: number; // Point de rosée en degrés Celsius
  uvi: number; // Indice UV
  clouds: number; // Couverture nuageuse en pourcentage
  visibility: number; // Visibilité en mètres
  wind_speed: number; // Vitesse du vent en m/s (mètres par seconde)
  wind_deg: number; // Direction du vent en degrés
  wind_gust: number; // Rafales de vent en m/s
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[]; // Données météorologiques
  pop: number; // Probabilité de précipitations en pourcentage
  rain: {
    ""?: number;
  };
};

export type { CurrentData, DailyData,HourlyData };
