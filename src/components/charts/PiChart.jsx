import React from "react";
import ReactApexChart from "react-apexcharts";

function PiChart(props) {
  const series = props.series;
  const options = {
    chart: {
      width: 380,
      type: "donut",
    },

    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 270,
      },
     
    },
    dataLabels: {
      enabled:false
    
       
      },
      labels: ['NewUsers',"OldUsers"],

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
        <div className="relative bg-white rounded-md max-w-[380px] ">
 
        <h3 className="mx-5 mt-5 font-mono font-semibold text-xl">Customers</h3>
        <p className="mx-5 capitalize  font-semibold text-gray-400 ">customers that buy products</p>
        <div className="absolute  rounded-full border-[20px]  w-[60%] h-[60%] md:h-[55%] top-[25%] left-[18%]  md:left-[18%] md:top-[22%] " />
      <div  id="chart">
        <div className="absolute w-20 top-[40%] left-[40%]">
      
        
        <h3 className="font-semibold text-center text-2xl" >65%</h3><span className=" capitalize block">total new customers</span>
        </div>
        </div>
       
    
          
        
  
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={380}
        />
      </div>
    </>
  );
}

export default PiChart;
