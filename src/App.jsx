import "./App.css";
import Card from "./components/Card";
import ColumnChart from "./components/charts/ColumnChart";
import PiChart from "./components/charts/PiChart";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// icons imports
import { LuBadgeDollarSign } from "react-icons/lu";
import { CiViewList } from "react-icons/ci";
import { GiWallet } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import Tabel from "./components/Tabel";

function App() {
  const PiData = [15, 50];
  const BarData = [9.3, 3.1, 4.0, 10.1, 8.0, 3.6, 5.2, 2.3, 1.4, 4.8, 3.5, 6.2];
  const cardsData = [
    {
      name: "earning",
      lastMonth: 523,
      thisMonth: 691,
      icon: LuBadgeDollarSign,
      color: "green",
    },
    {
      name: "orders",
      lastMonth: 400,
      thisMonth: 350,
      icon: CiViewList,
      color: "purple",
    },
    {
      name: "balance",
      lastMonth: 40,
      thisMonth: 38,
      icon: GiWallet,
      color: "blue",
    },
    {
      name: "total sales",
      lastMonth: 400,
      thisMonth: 450,
      icon: FaShoppingBag,
      color: "pink",
    },
  ];
  return (
    <>
      <div className="flex flex-row">
        <div className="w-[20%] bg-[#040440] ">
          <Sidebar />
        </div>

        <div id="container" className="md:w-[80%] mx-10">
          <div className="w-full">
            <Header />
          </div>

          <div className="w-full">
            <Card cardsData={cardsData} />
          </div>
          <div className="flex gap-10 flex-col w-full md:flex-row  h-fit my-10">
            <ColumnChart data={BarData} />
            <PiChart series={PiData} />
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
