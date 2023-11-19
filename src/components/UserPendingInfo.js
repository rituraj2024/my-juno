import React from 'react'
import { GoLinkExternal } from "react-icons/go";

const UserPendingInfo = (props) => {

    //console.log(props.data.UserData[4]);
    const data = props.data;
  

    
    const getColorByRiskLevel = (riskLevel) => {
        switch (riskLevel) {
          case 'Low':
            return 'bg-emerald-800';
          case 'Medium':
            return ' bg-yellow-800';
          case 'High':
            return 'bg-red-900';
          default:
            return 'bg-gray-700'; 
        }
      };
      const gettextColorByRiskLevel = (riskLevel) => {
        switch (riskLevel) {
          case 'Low':
            return 'text-emerald-800';
          case 'Medium':
            return ' text-yellow-800';
          case 'High':
            return 'text-red-900';
          default:
            return 'bg-gray-700'; 
        }
      };





  return (
    
    

    <div className='flex flex-col relative sm:flex-row  top-[200px] sm:top-[200px] '>
    
        <div className="w-[255px] sm:w-72 h-[72px] pl-6 pr-[18px] py-4 border-l border-b border-neutral-200 justify-between items-center inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.name}</div>
                <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">{data.email}</div>
                
            </div>
            <GoLinkExternal className=' text-indigo-600  right-0'/>

            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[149px] sm:w-36 h-[72px] pl-6 pr-[18px]  py-4 border-b border-neutral-200 justify-start items-center gap-1.5 inline-flex">
            <div className={`w-2.5 h-2.5 ${getColorByRiskLevel(data.Risklevel)}  right-[20px] rounded-full`} />
            <div className={`text-center ${gettextColorByRiskLevel(data.Risklevel)} text-sm font-medium  right-[50px] font-['Lettera Text LL'] leading-[18px] `}>{data.Risklevel}</div>
        </div>

        <div className="w-[164px] h-[72px] sm:w-40 pl-6 pr-[18px] py-4 border-b border-neutral-200 flex-col justify-center items-start gap-1.5 inline-flex">
            <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.Triggerreason}</div>
        </div>

        <div className="w-[155px] h-[72px] sm:w-32 pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">{data.InQueuefor}</div>
            </div>
        </div>

        <div className="w-[181.50px] h-[72px] sm:w-36  pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-none">{data.Dateaddedon}</div>
        </div>

        <div className="w-[182.50px] h-[72px] sm:w-36  pl-6 pr-[18px] py-4 border-r border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">{data.Previouslyreviewed[0]} </div>
                <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">{data.Previouslyreviewed[1]}</div>
            </div>
        </div>
    </div>
  )
}

export default UserPendingInfo
