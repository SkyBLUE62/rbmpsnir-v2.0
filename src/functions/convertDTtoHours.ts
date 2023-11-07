const convertDTtoHours = (dt: number) => {
    
  const dateTimestamp = dt * 1000;

  const date = new Date(dateTimestamp);

  const heures = date.getHours();
  const minutes = date.getMinutes();

  const heureLisible = `${heures.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;
  return heureLisible;
};

export default convertDTtoHours;
