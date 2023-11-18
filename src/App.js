import "./App.css";
import Sidebar from "./components/Sidebar";
import SectionTab from "./components/SectionTab";

import SearchBar from "./components/SearchBar";
import CloseButton from "./components/CloseButton";
import Arrowbutton from "./components/Arrowbutton";


const App = () => {
  return (
    <div className="felx flex-col  h-full w-full relative bg-white ">
     <Sidebar />
      
      <div className=" absolute  left-[306px] top-[48px]">
        <div
          className="text-zinc-950 text-[32px] left-[15px]
       absolute  font-medium font-['Lettera Text LL']"
        >
          Monitoring
        </div>
        
        
        
       
        <div className=" absolute top-[140px] w-[1086px] h-0.5 bg-neutral-200" />
        
        <div className="flex flex-row" >
       
            <SectionTab />
            <Arrowbutton />
            
            
                
        </div>
        <SearchBar className="relative"/>
        <CloseButton />
        
         
      
      
      
       
        
        
      </div>

     
    </div>
  );
};

export default App;
