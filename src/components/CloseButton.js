import React,{ useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import CloseAccount from '../pages/CloseAccount';


const CloseButton = () => {

      const [isFormOpen, setFormOpen] = useState(false);

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };


  return (
    
        <div className="absolute top-[95px] left-[900px] hover">
                    <div className="w-[152px] h-10 px-4 py-2 bg-rose-200 rounded-[7px] 
                    justify-start items-center gap-1.5 inline-flex" >

                        <div className="text-red-600 text-sm font-medium font-['Lettera Text LL'] leading-[14px]">
                            <div className="flex flex-row mx-auto ">
                      <IoIosCloseCircleOutline />
                      <button onClick={openForm} >Close Account</button> 
                      

                        </div>
                      </div>
                      {isFormOpen && <CloseAccount  onClose={closeForm} />}
                    </div>
                    
       </div>
   
  )
}

export default CloseButton