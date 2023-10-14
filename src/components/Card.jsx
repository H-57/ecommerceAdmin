import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
function Card({ cardsData }) {
  return (
    <><div className="flex justify-between w-full  ">
<div className="hidden  text-green-600 bg-green-200 text-purple-600 bg-purple-200 text-blue-600 bg-blue-200 text-pink-600 bg-pink-200"/>
  
      {cardsData.map((elm, index) => {
        return (
          <div key={index} className=" w-[230px] h-[150px] flex bg-white  rounded-md p-2">
            <div
              className={`bg-${elm.color}-200 w-[100px] h-[100px] rounded-full m-auto  `}
            >
              {
                <elm.icon
                  className={` m-auto mt-[25%] w-[50%] h-[50%] text-${elm.color}-600`}
                />
              }
            </div>
            <div className="flex flex-col h-[50%] my-auto">
              <h3 className=" capitalize text-gray-400 font-semibold text-sm">{elm.name}</h3>
              <p className=" font-semibold text-xl ">
                $
                {elm.thisMonth - elm.lastMonth > 0
                  ? elm.thisMonth - elm.lastMonth
                  : (elm.thisMonth - elm.lastMonth) * -1}
                k
              </p>
              <p
                className={`${
                  ((elm.thisMonth - elm.lastMonth) / elm.lastMonth) * 100 > 0
                    ? "text-green-600"
                    : "text-red-700"
                } font-semibold text-[12px] `}
              >
                {elm.thisMonth - elm.lastMonth > 0 ? (
                  <AiOutlineArrowUp className="inline " />
                ) : (
                  <AiOutlineArrowDown className="inline " />
                )}
                {((Math.abs(Number(elm.thisMonth - elm.lastMonth) / elm.lastMonth) * 100).toFixed(1)) }%{" "}
                <span className="text-gray-800 "> this {elm.heading}</span>
              </p>
            </div>
          </div>
        );
      })}
        </div>
    </>
  );
}

export default Card;
