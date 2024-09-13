import { Bar } from "react-chartjs-2";

const BarChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgba(132, 204, 22, 1)",
        data: [1_000, 5_000, 4_000, 20_000, 14_000],
        barPercentage: 0.9,
      },
      {
        label: "Expense",
        backgroundColor: "",
        data: [5_000, 10_000, 9_600, 12_000, 9_000],
        barPercentage: 0.9,
      },
    ],
  };
  const options = {
    responsive: true,

    scales: {
      x: {
        max: 12,
      },
      y: {
        max: 20000,
      },
    },
  };

  return (
    <div className=" h-[180px]">
      {" "}
      <Bar data={data} options={options} />
    </div>
  );
};
export default BarChart;
