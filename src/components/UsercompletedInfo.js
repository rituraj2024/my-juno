import React from 'react'
//import data from '../assests/userdata.json'
import { GoLinkExternal } from "react-icons/go";

const UsercompletedInfo = (props) => {
    
    const data = props.data;
    //console.log(data);

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
      // {"id": "1",
    //     "name": "Sam Altman",
    //     "email":"samaltman123@gmail.com",
    //     "Risklevel": "Medium",
    //     "Triggerreason": "IP Change",
    //     "InQueuefor": "4 days",
    //     "Dateaddedon": "12 Oct, 2023",
    //     "Previouslyreviewed":["Yes" ," 23 Aug, 2023"],
    //     "ActionReason":"Flagged",
    //     "Timetoclose":"14 days",
    //     "ActionTakenby":["Neil ","neil@onjuno.com"]
    // }

  return (
    <div className='flex flex-row relative top-[200px]'>
        <div className="  w-[255px] h-[72px] pl-6 pr-[18px] py-4 border-l border-b border-neutral-200 justify-between items-center inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.name}</div>
                <div className="text-center text-neutral-500 text-xs font-medium font-['Lettera Text LL'] leading-none">{data.email}</div>
            </div>
            <GoLinkExternal className=' right-0 text-indigo-600 '/>
            <div className="w-[18px] h-[18px] relative" />
        </div>

        <div className="w-[149px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-1.5 inline-flex">
            <div className={`w-2.5 h-2.5 ${getColorByRiskLevel(data.Risklevel)}  rounded-full`} />
            <div className={`text-center ${gettextColorByRiskLevel(data.Risklevel)} text-sm font-medium font-['Lettera Text LL'] leading-[18px] `}>{data.Risklevel}</div>
        </div>

        <div className="w-[164px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 flex-col justify-center items-start gap-1.5 inline-flex">
            <div className="text-center text-zinc-950 text-sm font-medium">{data.ActionReason}</div>
        </div>

        <div className="w-[137px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-1.5 inline-flex">
                <div className="text-center text-zinc-950 text-base font-medium font-['Lettera Text LL'] leading-[18px]">{data.Timetoclose}</div>
            </div>
        </div>

        <div className="w-[173px] h-[72px] pl-6 pr-[18px] py-4 border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-none">{data.Dateaddedon}</div>
        </div>

        <div className="w-52 h-[72px] pl-6 pr-[18px] py-4 border-r border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
            <div className="flex-col justify-center items-start gap-0.5 inline-flex">
                <div className="text-center text-zinc-950 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.ActionTakenby[0]} </div>
                <div className="text-center text-neutral-500 text-sm font-medium font-['Lettera Text LL'] leading-[18px]">{data.ActionTakenby[1]}</div>
            </div>
        </div>

    </div>
  )
}

export default UsercompletedInfo