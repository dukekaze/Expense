import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  return (
    <div className="flex">
      <div className=" h-[200px] w-[200px]  flex ">
        <Doughnut
          data={{
            datasets: [
              {
                data: [8000, 5000, 10000, 15000],
                backgroundColor: [
                  "rgba(231, 70, 148, 1)",
                  "rgba(28, 100, 242, 1)",
                  "rgba(253, 186, 140, 1)",
                  "rgba(22, 189, 202, 1)",
                ],
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                position: "right",
                boxWidth: 20,
                boxHeight: 20,
                borderRadius: 10,
              },
              colors: {
                forceOverride: true,
              },
            },
          }}
        />
      </div>
      <div>
        <div className="flex items-center mt-8 color-[#111827]">
          <div className="w-3 h-3 rounded-full bg-[#1C64F2]"></div>
          <div className="w-[90px] ml-2">Bills</div>
          <div className="w-[122px]">5’000’000₮</div>
          <div className="w-[64px]">15.50%</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-3 h-3 rounded-full bg-[#E74694]"></div>
          <div className="w-[90px] ml-2">Food</div>
          <div className="w-[120px]">5’000’000₮</div>
          <div className="w-[64px]">15.50%</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-3 h-3 rounded-full bg-[#FDBA8C]"></div>
          <div className="w-[90px] ml-2">Shopping</div>
          <div className="w-[120px]">5’000’000₮</div>
          <div className="w-[64px]">15.50%</div>
        </div>
        <div className="flex items-center mt-4">
          <div className="w-3 h-3 rounded-full bg-[#16BDCA]"></div>
          <div className="w-[90px] ml-2">Insurance</div>
          <div className="w-[120px]">5’000’000₮</div>
          <div className="w-[64px]">15.50%</div>
        </div>
      </div>
    </div>
  );
};
export default DoughnutChart;
