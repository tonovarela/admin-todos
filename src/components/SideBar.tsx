import Image from "next/image";
import { CiLogout } from "react-icons/ci";

import {  IoCalendarOutline, IoCheckboxOutline, IoListOutline,IoCodeWorkingOutline } from "react-icons/io5";
import { SideBarItem } from "./SideBarItem";

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

];

export const SideBar = () => {
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

            <Image src="data:image/png;base64,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" alt="" className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={150} height={150} />

            <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Tonovarela</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
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