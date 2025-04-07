import Image from "next/image";
import { CiLogout } from "react-icons/ci";

import {  IoCalendarOutline, IoCheckboxOutline, IoListOutline,IoCodeWorkingOutline, IoBasketOutline } from "react-icons/io5";
import { SideBarItem } from "./SideBarItem";

interface Props {
  username:string;
  image?:string;
  rol?:string;
}



const menuItems = [
  {
    icon: <IoCalendarOutline />,
    title: "Dashboard",
    url: "/dashboard"
  },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest TODOS",
    url: "/dashboard/rest-todos"
  },
  {
    icon: <IoListOutline />,
    title: "Server actions",
    url: "/dashboard/server-todos" 
  },
  {
    icon: <IoCodeWorkingOutline/>,
    title: "Cookies",
    url: "/dashboard/cookies" 
  },
  {
    icon: <IoBasketOutline/>,
    title: "Products",
    url: "/dashboard/products" 
  },

];

export const SideBar = ({username,image,rol="ADMIN"}:Props) => {
  return (
    <>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">

            <a href="#" title="home">

              <Image src="https://servicios.litoprocess.com/almacen/assets/img/logoLito.svg"
                width={150} height={150}
                alt="tailus logo" />
            </a>
          </div>

          <div className="mt-8 text-center">



            {
              image ?
              <Image src={image} alt={username} className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150} height={150}
              /> 
              :<Image src="" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150} height={150} />
            }
            

            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">{username}</h5>
            <span className="hidden text-gray-400 lg:block">{rol}</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
           {
            menuItems.map(item => (
              <SideBarItem {...item}  key={item.url}/>
            ))
           }

          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}