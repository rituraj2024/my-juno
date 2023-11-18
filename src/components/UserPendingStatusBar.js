import React from 'react'

import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";



const UserPendingStatusBar = () => {
  return (
    <div className='flex flex-row absolute top-[260px] '>
        <div className="  w-[255px] h-12 px-6 py-3 bg-neutral-100 rounded-tl-xl border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
            <div className="text-zinc-950 text-xs font-medium ">User</div>
            </div>
        </div>

        <div className="w-[149px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className=" items-center gap-1 flex flex-row justify-end">
                <div className="text-zinc-950 text-xs font-medium ">Risk level</div>
                <div className='absolute left-[335px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
                </div>
                <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[164px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium ">Trigger reason</div>
            </div>
        </div>

        <div className="w-[155px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium ">In queue for</div>
                <div className='absolute left-[660px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
            </div>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[181.50px] h-12 px-6 py-3 bg-neutral-100 border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium ">Date added on</div>
                <div className='absolute left-[835px]'>
                    <RiArrowDropUpLine className='absolute top-[-10px]'/>
                    <RiArrowDropDownLine className='absolute top-[-4px]'/>
                </div>
            </div>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[181.50px] h-12 px-6 py-3 bg-neutral-100 rounded-tr-xl border-b border-neutral-200 justify-start items-center gap-[11px] inline-flex">
            <div className="justify-start items-center gap-1 flex">
                <div className="text-zinc-950 text-xs font-medium ">Previously reviewed</div>
            </div>
        </div>
    </div>
  )
}

export default UserPendingStatusBar