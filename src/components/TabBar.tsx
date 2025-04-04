'use client'

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
    currentTab?: number;
    tabOptions?: number[];
}

export const TabBar = ({  currentTab=1,tabOptions=[1,2,3]}:Props) => {
  const [selected, setSelected] = useState(currentTab);
  const onTabSelected = (tabNumber: number) => {
    setSelected(tabNumber);
    setCookie('selectedTab',tabNumber.toString());
      
  }
  return (
    <div className={`grid w-full  space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-8  `}>

   {
        tabOptions.map((option, index) => {
            return (
            <div key={index}>
                <input type="radio"
                checked={selected === option}
                onChange={()=>{}}
                 id={option.toString()} className="peer hidden" />
                <label onClick={()=>onTabSelected(option)} className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                {option}
                </label>
            </div>
            )
        })
   }            
      
    </div>
  )
}