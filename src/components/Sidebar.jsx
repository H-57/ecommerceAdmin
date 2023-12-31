import { useState, useEffect } from "react";

import { RiSettingsLine,RiMoneyDollarBoxLine } from "react-icons/ri";
import { TbSquareKey,TbDiscount2 } from "react-icons/tb";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { BsPersonSquare } from "react-icons/bs";
import {MdOutlineLiveHelp} from 'react-icons/md';

function Sidebar() {
  const [list, SetList] = useState();
  const SidebarList = [
    { name: "Dashboard", IsChecked: true, icon: TbSquareKey, list: false },
    {
      name: "product",
      IsChecked: false,
      icon: AiFillCodeSandboxSquare,
      list: true,
    },
    { name: "customers", IsChecked: false, icon: BsPersonSquare, list: true },
    { name: "income", IsChecked: false, icon: RiMoneyDollarBoxLine, list: true },
    { name: "promote", IsChecked: false, icon: TbDiscount2, list: true },
    { name: "help", IsChecked: false, icon: MdOutlineLiveHelp, list: true },
  ];
  const handleItemClick = (index) => {


    const updatedList = list.map((item, i) => {
      if (i === index) {
        return { ...item, IsChecked: !item.IsChecked };
      }
      return { ...item, IsChecked: false };
    });
    SetList(updatedList);
  };

  useEffect(() => {
    SetList(SidebarList);
  }, []);
  return (
    <div className=" fixed z-10 text-white h-[100vh] w-full md:fixed md:w-[22%] md:pr-10 bg-[#040440] ">
      <div className="font-semibold text-xl w-fit m-auto font-serif ">
        <RiSettingsLine className="inline mr-2" />
        Dashboard
      </div>
      <ul className="flex flex-col mx-5 mt-10 gap-3 w-full pr-10 md:pr-0">
        {list?.map((elm, index) => (
          <li
            key={index}
            onClick={()=>handleItemClick(index)
               }
            className={`hover:bg-[#2d2d69] hover:text-white cursor-pointer text-sm font-semibold w-full capitalize ${
              elm.IsChecked ? "bg-[#2d2d69] text-white" : "text-gray-400"
            } py-2 rounded-md `}
          >
            {<elm.icon className="rounded-md text-xl inline mx-3" />}
            {elm.name}
            {elm.list && (
              <span className=" float-right text-xs mr-1">
                <IoIosArrowForward className="inline" />
              </span>
            )}
          </li>
        ))}
      </ul>
<div className="flex fixed bg-[#2d2d69]  bottom-5 rounded-md p-2 ml-2 w-full md:w-[18%]">
<img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar"/>
<div className="mx-3">

<h3 className="font-semibold">Evano</h3><span className=" capitalize block text-gray-400 text-sm">project manager</span>
</div>
<div className="w-fit h-fit m-auto text-gray-400 float-right rotate-90">

<IoIosArrowForward />
</div>
</div>
    </div>
  );
}

export default Sidebar;
