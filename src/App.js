/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./index.css";

// ///////////////////////////////se importan paginas y componentes/////////////////////////
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Line,
  Editor,
} from "./pages";
// ///////////////////////////////se importan paginas y componentes/////////////////////////

// ///////////////////////////////se importa el hook del estado creado en context///////////////////////////
import { useStateContext } from "./contexts/ContextProvider";
// ///////////////////////////////se importa el hook del estado creado en context///////////////////////////

function App() {
  // acá se está declarando el menú
  const {
    activeMenu,
    themeSettings,
    setThemeSettings,
    currentColor,
    currentMode,
  } = useStateContext();

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className=" flex relative bg-white  w-full  dark:bg-main-dark-bg ">
          {/* ///////////////////////////// acá empieza la tuerquita de las opciones//////////////////////// */}
          <div className="fixed right-4 bottom-4  z-50">
            <TooltipComponent content="Settings" position="top">
              <button
                onClick={() => setThemeSettings(true)}
                className=" text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ background: currentColor, borderRadius: "50%" }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {/* ///////////////////////////// acá termina la tuerquita de las opciones//////////////////////// */}
          {/* /////////////////////////////////acá empieza el sidedeBar///////////////////////////////////////// */}
          {activeMenu ? (
            <div className=" w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg ">
              <Sidebar />
            </div>
          )}
          {/* /////////////////////////////////acá termina el sidedeBar///////////////////////////////////////// */}
          {/* /////////////////////////////////acá todo el body///////////////////////////////////////// */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg main-h-screen md:ml-72 w-full
            ${activeMenu ? " md:ml-72" : "flex-2"}`}
          >
            {/* /////////////////////////////////acá empieza el navBar///////////////////////////////////////// */}
            <div className=" fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>

            {/* /////////////////////////////////acá termina el navBar///////////////////////////////////////// */}
            {/* /////////////////////////////////acá empieza las rutas///////////////////////////////////////// */}
            <div>
              {themeSettings && <ThemeSettings />}
              <Routes>
                {/* //////////////Dasboard//////// */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ECommerce" element={<Ecommerce />} />

                {/* //////////////pages//////// */}
                <Route path="/compras" element={<Orders />} />
                <Route path="/empleados" element={<Employees />} />
                <Route path="/clientes" element={<Customers />} />

                {/* //////////////aplicaciones//////// */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/agenda" element={<Calendar />} />
                <Route path="/selector-color" element={<ColorPicker />} />

                {/* //////////////Tablas//////// */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/barras" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/finanzas" element={<Financial />} />
                <Route path="/color-Mapping" element={<ColorMapping />} />
                <Route path="/pyramide" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
            {/* /////////////////////////////////acá termina las rutas///////////////////////////////////////// */}
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
