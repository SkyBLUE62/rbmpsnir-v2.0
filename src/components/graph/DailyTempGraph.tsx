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
import { HourlyData } from "@/dto/openweather";
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
  historyData: HourlyData[];
};

export const DailyTempGraph = ({ historyData }: Props) => {
  const labels: string[] = [];
  const tempData: number[] = [];
  console.log(historyData[0].dt);
  historyData.map((item) => {
    labels.push(convertDTtoHours(item.dt));
    tempData.push(item.temp);
  });
  console.log(labels);

  const data: any = {
    labels: labels,
    datasets: [
      {
        label: "C°",
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
        data: tempData,
      },
    ],
  };

  const options: any = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Désactive l'affichage du tooltip complet au survol
      },
    },
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <>
      <span className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary font-monument">
        Temperature in the last few hours
      </span>
      <div className="h-[85%] w-full  bottom-0 absolute">
        <Line data={data} options={options} className="w-full h-full" />
      </div>
    </>
  );
};
