export const findWindDirection = (windDeg: number) => {
  if (windDeg <= 22.5 || windDeg > 337.5) {
    return "N";
  } else if (windDeg > 22.5 && windDeg <= 67.5) {
    return "NE";
  } else if (windDeg > 67.5 && windDeg <= 112.5) {
    return "E";
  } else if (windDeg > 112.5 && windDeg <= 157.5) {
    return "SE";
  } else if (windDeg > 157.5 && windDeg <= 202.5) {
    return "S";
  } else if (windDeg > 202.5 && windDeg <= 247.5) {
    return "SW";
  } else if (windDeg > 247.5 && windDeg <= 292.5) {
    return "W";
  } else if (windDeg > 292.5 && windDeg <= 337.5) {
    return "NW";
  } else {
    return "N";
  }
};
