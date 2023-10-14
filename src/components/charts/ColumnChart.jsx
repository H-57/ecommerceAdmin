import React from "react";
import ReactApexChart from "react-apexcharts";
function ColumnChart({data}) {
  const series = [
    {
      name: "Monthly Earning",
      data: data,
    },
  ];

  const options = {
    colors: ["#5a32ea"],
    states: {
      normal: {
        filter: { type: "lighten", value: 0.7 },
      },
      hover: {
        filter: { type: "lighten", value: 0 },
      },
      active: {
        filter: { type: "darken", value: 0.2 },
        allowMultipleDataPointsSelection: false,
      },
    },
    chart: {
      toolbar: {
        show: false,
      },
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      lines: {
        show: false,
      },
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      position: "bottom",
    },
    yaxis: {
      lines: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
   

    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
  };

  return (
    <>
      <div className=" relative w-full  bg-white rounded-md  " id="chart">
        <h3 className="mx-5 mt-5 font-mono font-semibold text-xl">Overview</h3>
        <p className="mx-5 capitalize  font-semibold text-gray-400 ">monthly earning</p>
      <select className="absolute right-5 z-[4] outline-none text-gray-400 rounded-md top-5 bg-gray-100 " name="Option" >
    <option value="Quartely">Quartely</option>
    <option value="Weekly">Weekly</option>
    <option value="Monthly">Monthly</option>
    
  </select>
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={300}
        />
      </div>
    </>
  );
}

export default ColumnChart;
