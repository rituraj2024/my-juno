import React from 'react'
import Dropdown from "./Dropdown";
import data from '../assests/data.json';
import data1 from '../assests/data1.json';

const Arrowbutton = () => {
  return (
    <div className='absolute top-[205px] left-[400px] flex flex-row gap-6 '>
        <Dropdown data={data.TriggerRegion} title="Trigger Region" />
            <Dropdown data={data1.RiskLevel} title="Risk Level"  />
      
    </div>
  )
}

export default Arrowbutton