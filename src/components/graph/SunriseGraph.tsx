"use client";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { CurrentData } from "@/dto/openweather";

import convertDTtoHours from "@/functions/convertDTtoHours";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

type Props = {
  current: CurrentData;
};

export const SunriseGraph = ({ current }: Props) => {
  const { sunrise, sunset } = current;

  const hoursSunrise: string = convertDTtoHours(sunrise);
  const hoursSunset: string = convertDTtoHours(sunset);
  const floatHoursSunrise: number = parseFloat(hoursSunrise.replace(":", "."));
  const floatHoursSunset: number = parseFloat(hoursSunset.replace(":", "."));

  const dataPoints = 24; // Nombre de points sur la courbe
  const dataCourbe = [];
  const labels = [];
  const intHoursSunrise: number = parseInt(hoursSunrise);

  for (let hour = 0; hour < dataPoints; hour++) {
    // Vérifier si l'heure est dans la plage entre sunrise et sunset
    if (hour >= intHoursSunrise && hour <= floatHoursSunset) {
      if (intHoursSunrise >= hour && intHoursSunrise <= hour + 1) {
        console.log("test");
        labels.push(hoursSunrise);
      } else if (floatHoursSunset >= hour && floatHoursSunset <= hour + 1) {
        labels.push(hoursSunset);
      } else {
        labels.push(`${hour}:00`);
      }

      const centerX: number = Math.round(
        floatHoursSunset - floatHoursSunrise - 1
      );

      const spread = 2; // Contrôle la largeur de la courbe (plus grand = plus large)

      // Utilisez une fonction gaussienne pour créer la courbe
      const value = Math.exp(-((hour - centerX) ** 2) / (2 * spread ** 2));

      // Étirez la courbe pour qu'elle atteigne une hauteur maximale (par exemple, 10)
      const maxValue = 10;
      dataCourbe.push(maxValue * value);
    } else {
      // En dehors de la plage, la valeur est zéro
      labels.push(`${hour}:00`);
      dataCourbe.push(0);
    }
  }

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "Exemple de courbe",
        display: true,
        lineTension: 0.3,
        backgroundColor: "rgba(78, 115, 223, 0.05)",
        borderColor: "rgba(78, 115, 223, 1)",
        pointRadius: 2,
        pointBackgroundColor: "rgba(78, 115, 223, 1)",
        pointBorderColor: "rgba(78, 115, 223, 1)",
        pointHoverRadius: 3,
        pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
        pointHoverBorderColor: "rgba(78, 115, 223, 1)",
        pointHitRadius: 10,
        pointBorderWidth: 2,
        data: dataCourbe,
      },
    ],
  };

  // Fonction pour générer les labels des heures

  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Désactive l'affichage du tooltip complet au survol
        callbacks: {
          // Fonction pour personnaliser l'affichage des données au survol
          label: function (context: any) {
            const labels = context.label;
            return `${labels}`;
          },
        },
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};
