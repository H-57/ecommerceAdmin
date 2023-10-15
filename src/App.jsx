import "./App.css";
import { useState } from "react";
import Card from "./components/Card";
import ColumnChart from "./components/charts/ColumnChart";
import PiChart from "./components/charts/PiChart";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Tabel from "./components/Tabel";

// icons imports
import { LuBadgeDollarSign } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { GiWallet } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import{MdOutlineSegment}from "react-icons/md";
import {RxCross1}from "react-icons/rx"

function App() {
  const [Nav, setNav] = useState(false)
  const PiData = [15, 50];
  const BarData = [9.3, 3.1, 4.0, 10.1, 8.0, 3.6, 5.2, 2.3, 1.4, 4.8, 3.5, 6.2];
  const cardsData = [
    {
      name: "earning",
      lastMonth: 523,
      thisMonth: 691,
      icon: LuBadgeDollarSign,
      color: "green",
      heading:"month"
    },
    {
      name: "orders",
      lastMonth: 400,
      thisMonth: 350,
      icon: CiViewList,
      color: "purple",
      heading:"month"
    },
    {
      name: "balance",
      lastMonth: 40,
      thisMonth: 38,
      icon: GiWallet,
      color: "blue",
      heading:"month"
    },
    {
      name: "total sales",
      lastMonth: 400,
      thisMonth: 450,
      icon: FaShoppingBag,
      color: "pink",
      heading:"week"
    },
  ];
  return (
    <>
    <div className="md:hidden text-white text-xl  fixed z-50 top-0 bg-[#040440] mb-10 h-10 w-full rounded-md" onClick={()=>setNav(!Nav)}>
    Dashboard
   
          {Nav?<RxCross1 className="text-xl text-white float-right m-3"/>:<MdOutlineSegment className="text-xl text-white float-right m-3"/>}
        </div>
      <div className="flex flex-row overflow-hidden">
       
        <div className={` w-full ${Nav?"block":"hidden"}   md:block md:w-[22%]`}   >
          <Sidebar />
        </div>

        <div id="container" className="w-full md:w-[78%] mx-3 md:mx-10">
        
          <div className="w-full">
            <Header />
          </div>

          <div className="w-full">
            <Card cardsData={cardsData} />
          </div>
          <div className="flex gap-10 flex-col w-full md:flex-row  my-10 overflow-hidden">
            <div className="w-full md:w-[70%]">

            <ColumnChart data={BarData} />
            </div>
            <div className="w-full md:w-[30%] relative">

            <PiChart series={PiData} />
            </div>
          </div>
          <div className="w-full">
            <Tabel/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
