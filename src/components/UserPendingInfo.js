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
            return 'bg-gray-700'; // Default color if the level is not recognized
        }
      };





  return (
    
    

    <div className='flex flex-row relative top-[200px]'>
    
        <div className="w-[255px] h-[72px] pl-6 pr-[18px] py-4 border-l border-b border-neutral-200 justify-between items-center inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.name}</div>
                <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">{data.email}</div>
                
            </div>
            <GoLinkExternal className=' text-indigo-600  right-0'/>

            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[149px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-1.5 inline-flex">
            <div className={`w-2.5 h-2.5 ${getColorByRiskLevel(data.Risklevel)}  rounded-full`} />
            <div className={`text-center ${gettextColorByRiskLevel(data.Risklevel)} text-sm font-medium font-['Lettera Text LL'] leading-[18px] `}>{data.Risklevel}</div>
        </div>

        <div className="w-[164px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 flex-col justify-center items-start gap-1.5 inline-flex">
            <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.Triggerreason}</div>
        </div>

        <div className="w-[155px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">{data.InQueuefor}</div>
            </div>
        </div>

        <div className="w-[181.50px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-none">{data.Dateaddedon}</div>
        </div>

        <div className="w-[181.50px] h-[72px] pl-6 pr-[18px] py-4 border-r border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">{data.Previouslyreviewed[0]} </div>
                <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">{data.Previouslyreviewed[1]}</div>
            </div>
        </div>
    </div>
  )
}

export default UserPendingInfo



// <div className='flex flex-row absolute top-[290px]'>

    //     <div className="w-[255px] h-[72px] pl-6 pr-[18px] py-4 border-l border-b border-neutral-200 justify-between items-center inline-flex">
    //         <div className="flex-col justify-center items-start gap-1.5 inline-flex">
    //             <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">Sam Altman</div>
    //             <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">samaltman123@gmail.com</div>
    //         </div>
    //         <div className="w-[18px] h-[18px] relative" />
    //     </div>

    //     <div className="w-[149px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-1.5 inline-flex">
    //         <div className="w-2.5 h-2.5 bg-yellow-800 rounded-full" />
    //         <div className="text-center text-yellow-800 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">Medium</div>
    //     </div>

    //     <div className="w-[164px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 flex-col justify-center items-start gap-1.5 inline-flex">
    //         <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">IP Change</div>
    //     </div>

    //     <div className="w-[155px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
    //         <div className="flex-col justify-center items-start gap-1.5 inline-flex">
    //             <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">4 days</div>
    //         </div>
    //     </div>

    //     <div className="w-[181.50px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
    //         <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-none">12 Oct, 2023</div>
    //     </div>

    //     <div className="w-[181.50px] h-[72px] pl-6 pr-[18px] py-4 border-r border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
    //         <div className="flex-col justify-center items-start gap-1.5 inline-flex">
    //             <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">Yes </div>
    //             <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">23 Aug, 2023</div>
    //         </div>
    //     </div>
    // </div>