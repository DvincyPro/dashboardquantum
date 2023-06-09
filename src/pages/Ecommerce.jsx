/* eslint-disable no-unused-vars */
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

import { Stacked, Pie, Button, SparkLine } from "../components";

import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  const  {currentColor} = useStateContext();

  return (
    <div className=" h-[150vh] w-full mt-[90px] md:mt-0 ">
      {/*/////////////////////////////////////// esto es la parte de arriba...//////////////// ///////////////// */}
      <div className=" flex flex-wrap md:flex-nowrap justify-center">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full  m-3 p-8 pt-9 bg-no-repeat bg-cover bg-center md:w-[45%] soyYo">
          <div className=" flex justify-between items-center">
            <div>
              <p className=" font-bold text-gray-400">Ganancias</p>
              <p>$63.512.78</p>
            </div>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
              size="md"
            />
          </div>
        </div>
        {/*///////////////////// Botones que vienen debajo de la primera///////////////////////////////////////// */}
        <div className="flex justify-center gap-1 items-center flex-wrap">
          {earningData.map((item) => (
            <div
              key={item.title}
              className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m:w-56 p-4 pt-9 rounded-2xl"
            >
              <button
                className=" text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-xl "
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
              >
                {item.icon}
              </button>
              <p className=" mt-3 ">
                <span className=" text-xl font-semibold ">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className=" text-sm text-gray-400 mt-1 ">{item.title}</p>
            </div>
          ))}
        </div>
        {/*///////////////////// Botones que vienen debajo de la primera///////////////////////////////////////// */}
      </div>
      {/*/////////////////////////////////////// esto es la parte de arriba...//////////////// ///////////////// */}

      {/*/////////////////////////////////// seccion de barras en el dasboard...//////////////// ///////////////// */}
      <div className=" flex flex-wrap  gap-10 justify-center ">
        <div className=" bg-white dark:text-gray-200 dark:bg-secondary-dark-bg  p-4 rounded-2xl w-[100%] md:w-[60%]">
          {/* acá están la parte de arriba */}
          <div className=" flex justify-between md:flex-row flex-col ">
            <p className=" font-semibold text-xl"> Actualizaciones</p>
            <div className=" flex items-center gap-4 ">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Gastos</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl cursor-pointer">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Presupuesto</span>
              </p>
            </div>
          </div>
          {/* acá están la parte de arriba */}
          {/* seccion de las tablas///////////////////////////////////////////////////////////////////////////////////////////////// */}
          <div className="mt-10 w-[100%] flex-col  md:flex-row flex gap-10 items-center  justify-center" >
            <div className="border-r-1 border-color m-4 pr-10" >
              <div>
                <p>
                  <span className=" text-3xl font-bold " >$92.438</span>
                  <span className=" ml-3 text-sx p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 " >23%</span>
                </p>
                <p className=" text-gray-400 mt-1 " >Presupuesto</p>
              </div>
              <div className="mt-8  " >
                <p>
                  <span className=" text-3xl font-bold " >$48.438</span>
                </p>
                <p className=" text-gray-400 mt-1 " >Gastos</p>
              </div>
{/*////////////////////////////////////////////////// tabla del sparkline//////////////////////////////////////// */}
              <div className="mt-5" >
                <SparkLine
                currentColor="brue"
                id="lineSparkLine"
                type="Line"
                height="80px"
                width="250px"
                data={SparklineAreaData}
                color={currentColor}
                />
              </div>
              <div className=" mt-10 " >
                <Button color="white" bgColor={currentColor} text="Descargar reporte" borderRadius="10px" />
              </div>
            </div>
{/*///////////////////////////////////////////////////////// tabla de barras///////////////////////////////////// */}
            <div>
              <Stacked width="290px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
