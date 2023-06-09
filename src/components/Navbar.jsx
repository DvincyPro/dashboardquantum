/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import {RxAvatar} from "react-icons/rx";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";



import avatar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from "./";
import { useStateContext } from "../contexts/ContextProvider";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position=" BottomCenter ">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray "
    >
      <span
        style={{ background: dotColor }}
        className="  absolute inline-flex rounded-full w-2 h-2  right-2 top-2 "
      />
        {icon}
    </button>
  </TooltipComponent>
);

// este es el componente que se exporta desde acá para el visual que renderiza todo el NavBar
const Navbar = () => {
  // acá se utiliza el contexto del hoox para establecer la visibilidad, este está hecho en la carpeta de src/context
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,screenSize, setScreenSize, currentColor } = useStateContext();

  // esto es para detectar cual es el ancho de la pantalla de todos los dispositivos
  useEffect(()=>{
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize)

    handleResize()
    return()=> window.removeEventListener('resize', handleResize);
  },[setScreenSize]);
// acá en cuanto detecta que la pantalla es menor a w-900 se esconde el sidebar por defecto
  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }else{setActiveMenu(true)};
  
    // return () => {
    //   second
    // }
  }, [screenSize, setActiveMenu])
  
  return (
    <div className=" flex justify-between mt-4 p-2 w-full md:mx-6 relative">
      {/*/////////////////////////// botón para abrir y cerrar el menú de navegación/////////////////////// */}
      <div  >
        <NavButton
          title="Menu"
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
          color={currentColor}
          icon={<AiOutlineMenu />}
        />
      </div>
      {/*/////////////////////////// botón para abrir y cerrar el menú de navegación/////////////////////// */}

      {/* botones de utilidades */}
      <div className="flex">
        {/*////////////////////////////////////////////////// carro//////////////////////// */}
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        {/*//////////////////////////////////////////////// chat///////////////////////////////////////// */}
        <NavButton
          title="Chat"
          customFunc={() => handleClick('chat')}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        {/*/////////////////////////////////////////////notification//////////////////////////////////////// */}

        <NavButton
          title="notification"
          customFunc={() => handleClick('notification')}
          color={currentColor}
          dotColor="yellow"
          icon={<RiNotification3Line />}
        />
        {/*/////////////////////////////////////////////perfil////////////////////////////////////////////// */}

        <TooltipComponent content="Profile" position="BottomCenter">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
          onClick={() =>handleClick('profile')}
          >
            <RxAvatar className=" text-black  w-8 h-8 " />
            <p>
              <span className="text-14 text-gray-400" >Hola,</span>
              <span className=" text-gray-400 font-bold ml-1 text-14" >Belen</span>
            </p>
            <MdKeyboardArrowDown className=" text-gray-400 text-14 " />
          </div>
        </TooltipComponent>

        {/* acá se maneja lo que se myestra si se da clic en algún sitio */}
        {isClicked.cart && <Cart/>}
        {isClicked.chat && <Chat/>}
        {isClicked.notification && <Notification/>}
        {isClicked.userProfile && <UserProfile/>}
      </div>
    </div>
  );
};

export default Navbar;
