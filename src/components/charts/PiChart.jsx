import React from "react";
import ReactApexChart from "react-apexcharts";

function PiChart(props) {
  const series = props.series;
  const options = {
    
colors:["#f71485","#5b33e8"],
    chart: {
      type: "donut",
    },

    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 270,
      },
      
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["NewUsers", "OldUsers"],

    fill: {
      type: "gradient",
    },
    legend: {
      show: false,
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
  };

  return (
    <>
      <div className=" bg-white rounded-md w-full h-full relative  ">
        <h3 className="mx-5 mt-5 font-mono font-semibold text-xl">Customers</h3>
        <p className="mx-5 capitalize  font-semibold text-gray-400 ">
          customers that buy products
        </p>
       
        
           <div className="absolute w-20 top-[40%] left-[40%]">
            <h3 className="font-semibold text-center text-xl">65%</h3>
            <span className=" capitalize block text-[12px]">total new customers</span>
          </div> 
       

        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          className=" w-[80%]  absolute bottom-[30%] left-[10%] "
        />
      </div>
    </>
  );
}

export default PiChart;
