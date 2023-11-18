import React, { useState } from 'react';
import './SectionTab.css'; 
import Userpendinginfopage from '../pages/Userpendinginfopage';
import UserCompletedStatusBar from './UserCompletedStatusBar';
import UserPendingStatusBar from './UserPendingStatusBar';
//import UsercompletedInfo from './UsercompletedInfo';
//import userdata from '../assests/userdata.json'
import Usercompletedinfopage from '../pages/Usercompletedinfopage';


const SectionTab = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tab-container absolute top-[100px] w-[200px] h-10 justify-start items-start gap-4 inline-flex">
        <div className=' absolute '>
        {activeTab === 'pending' ?
         <div>
            <div className='absolute top-[-100px] '>
            <UserPendingStatusBar className="abolute "/>
            </div>
            <Userpendinginfopage className=' absolute top-[50px] left-0'/>

          </div>
         : 
         
         <div> 
              <div className='absolute  '>
              <UserCompletedStatusBar className="abolute top-[-50px] "/>
               </div> 
               <Usercompletedinfopage className=' absolute top-[50px] left-0'/>
               
          </div>
        }     
        
      </div>
      <div
        className={`tab-item ${activeTab === 'pending' ? 'active' : ''}`}
        onClick={() => handleTabClick('pending')}
      >
        Pending
      </div>
      <div
        className={`tab-item ${activeTab === 'completed' ? 'active' : ''}`}
        onClick={() => handleTabClick('completed')}
      >
        Completed
      </div>
      <div className="underline" style={{ left: activeTab === 'completed' ? '50%' : '0' }}></div>

      
    </div>
  );
};

export default SectionTab;

