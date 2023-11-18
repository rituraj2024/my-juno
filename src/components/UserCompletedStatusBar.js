import React from 'react'
//import UsercompletedInfo from './UsercompletedInfo'
//import userdata from '../assests/userdata.json'
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";


const UserCompletedStatusBar = () => {
  return (
    <div  className='flex flex-row absolute top-[160px]'>
        <div className="w-[255px] h-12 px-6 py-3 bg-neutral-100 rounded-tl-xl border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">User</div>
            </div>
        </div>

        <div className="w-[149px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">Risk level</div>
                <div className='absolute left-[340px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
            </div>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[164px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">Action reason</div>
            </div>
        </div>

        <div className="w-[150px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">Time to close</div>
                <div className='absolute left-[668px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
            </div>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[173px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">Date added on</div>
                <div className='absolute left-[830px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
            </div>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-52 h-12 px-6 py-3 bg-neutral-100 rounded-tr-xl border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium font-['Lettera Text LL'] leading-[18px]">Action taken by</div>
            </div>
        </div>

       
    </div>
  )
}

export default UserCompletedStatusBar