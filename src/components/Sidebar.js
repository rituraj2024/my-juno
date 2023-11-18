import React from 'react'
import profileimage from '../assests/Image.svg'
import logo from '../assests/logo.png'
import "./Sidebar.css"


const Sidebar = () => {



  return (
    <div className="w-[258px] h-[800px] px-8 pt-12 pb-8 bg-white border-r border-neutral-200 flex-col justify-between items-start inline-flex">
    <div className="self-stretch h-[405.60px] flex-col justify-start items-start gap-12 flex">
         <img className="w-[194px] h-[77.60px]" src={logo} alt="logo"/>
        <div className="  self-stretch h-[280px] flex-col justify-start items-start gap-2 flex">
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10  self-stretch px-4 py-2.5 rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>Overview</p></div>
            </div>
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10 self-stretch px-4 py-2.5 rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>Onboarding</p></div>
            </div>
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10 self-stretch px-4 py-2.5  rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className=" text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>Monitoring</p></div>
            </div>
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10 self-stretch px-4 py-2.5 rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className="w-[67px] text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>Flagginng</p></div>
            </div>
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10 self-stretch px-4 py-2.5 rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>Source of Income</p></div>
            </div>
            <div className=" hover-container  hover:bg-indigo-600 hover:bg-opacity-10 w-[194px] h-10 px-4 py-2.5 rounded-[7px] justify-start items-center gap-3 inline-flex">
                <div className="text-neutral-500 text-base font-medium font-['Lettera Text LL']"><p>UAR</p></div>
            </div>
            
        </div>
    </div>
    <div className="w-[204px] justify-start items-center gap-20 inline-flex">
        <div className="justify-start items-center  gap-2 flex">
            { <div className="w-[38px] h-[38px] justify-center items-center flex">
                <img className="w-[38px] h-[38px] rounded-full border-2 border-white" src={profileimage} alt='profileimg'/>
            </div> }
            <div className="flex-col justify-center items-start gap-0.5  inline-flex">
                <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">Elon Musk</div>
                <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">elon@twitter.com</div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Sidebar


