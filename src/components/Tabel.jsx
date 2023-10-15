import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function Tabel() {
  return (
    <div className="my-10 bg-white rounded-md">
      {/* header of tabel top */}
      <div className="md:p-10">
      <p className=" font-semibold text-sm md:text-xl w-fit inline ">Product Sell</p>

      <select
        className=" text-sm text-gray-400 rounded-md  bg-gray-100 float-right p-2 ml-3"
        name="Option"
      >
        <option value="Quartely">Last 30 days</option>
      </select>
      <div className="relative  float-right bg-gray-100 rounded-md p-1 text-gray-400">
        <AiOutlineSearch className="inline  md:text-2xl" />
        <input type="text" placeholder="search" className=" bg-gray-100  outline-none w-[60px] md:w-auto" />
      </div>
      </div>


     
<div className="relative overflow-x-auto w-full">
  <table className="w-full text-sm text-left ">
    <thead className="text-xs capitalize  border-b text-gray-400 ">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Stock
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
         Total Sales
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="">
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="w-20 h-12 flex-shrink-0">
              <img className="w-20 h-12 object-cover rounded-md" src="https://shorturl57.vercel.app/ESQSz4QS" alt="Image Alt Text" />
            </div>
            <div className="ml-4">
              <div className="text-sm font-semibold  text-gray-900">Abstract 3D</div>
              <div className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sequi.</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 text-gray-500">
        32 in stocks
        </td>
        <td className="px-6 py-4 font-semibold">
        $45.99
        </td>
        <td className="px-12 py-4">
       20
        </td>
      </tr>
      <tr className="">
        <td className="px-6 py-4">
          <div className="flex items-center">
            <div className="w-20 h-12 flex-shrink-0">
              <img className="w-20 h-12 object-cover rounded-md" src="https://shorturl57.vercel.app/lmHI3E8f" alt="Image Alt Text" />
            </div>
            <div className="ml-4">
              <div className="text-sm  font-semibold text-gray-900">Sharpens Illestration</div>
              <div className="text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sequi.</div>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 text-gray-500">
        32 in stocks
        </td>
        <td className="px-6 py-4 font-semibold">
        $45.99
        </td>
        <td className="px-12 py-4">
       20
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  );
}

export default Tabel;
