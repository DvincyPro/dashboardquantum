/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import logoSvg from "../data/logo.svg";

import { links } from "../data/dummy";
// ///////////////////////////////se importa el hook del estado creado en context///////////////////////////
import { useStateContext } from "../contexts/ContextProvider";
// ///////////////////////////////se importa el hook del estado creado en context///////////////////////////

const Sidebar = () => {
// acá se declara una variable para manejar la visibilidad del sidebar
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext();


  const handleCloseSideBar = () => {
    if (!activeMenu || screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  // estos son los estilos que se les da a menu de navegacion del sidebar declarados como variables///
  const activeLink =
    "flex items-center  gap-5 pl-4 pt-3 pb-2.5 rounded-lg dark:text-gray-200 text-gray-700 text-md m-2";
  const normalLink =
    "items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  dark:text-gray-200 dark:hover:text-black hover:bg-light text-md m-2 text-gray-700";
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* //////////////////logo y tootip/////////////////// */}
          <div className=" flex justify-between items-center ">
            <Link to="/" onClick={handleCloseSideBar} className=" items-center w-[100%] ">
              <img src={logoSvg} alt="imagen " className=" img-fluid " />
            </Link>
            {/* //////////////////logo/////////////////// */}
            {/*//////////////////////// tootip///////////////////////// */}
            <TooltipComponent content="Menu" position=" BottomCenter ">
              <button
                type="button"
                onClick={() => setActiveMenu((prevActiveMenu)=>!activeMenu)}
                className=" text-xl rounded-full p-3 hover:bg-light-gray block md:hidden "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {/*//////////////////////// logo y tootip///////////////////////// */}

          {/*//////////////////////// Navegación del sidebar///////////////////////// */}
          <div className=" mt-10 ">
            {/* Itera sobre cada objeto 'item' en el array 'links' */}
            {links.map((item) => (
              <div key={item.title}>
                {/* Muestra el título del 'item' en formato de texto */}
                <div className="text-gay-400 m-3  mt-4 uppercase gap-2">
                  {item.title}
                </div>
                {/* Itera sobre cada objeto 'Link' en el array 'item.links' */}
                {item.links.map((Link) => (
                  <NavLink
                    to={`/${Link.name}`}
                    key={Link.name}

                    style={({isActive})=> ({backgroundColor: isActive ? currentColor:''})}


                    onClick={handleCloseSideBar}
                    // Establece la clase de estilo condicionalmente
                    className={(isActive) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {/* Muestra el icono del 'Link' */}
                    {Link.icon}
                    {/* Muestra el nombre del 'Link' en formato de texto */}
                    <span className="capitalize   ">{Link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
          {/*//////////////////////// Navegación del sidebar///////////////////////// */}
        </>
      )}
    </div>
  );
};

export default Sidebar;
