import React,{useEffect, useState} from 'react'

import { OPENINGHOUR } from '../models/mock-hours-opening'
const OpeningHour=()=>{
   const [hour,setHour]=useState(OPENINGHOUR)
   useEffect(()=>{
    setHour(OPENINGHOUR)
  
},[])
   const getClosed=(day,startHour,endHour,status)=>{
    if(day=='dimanche'){
        return 'closed '
    }
    else{
        return startHour +' - '+endHour
    }
   }
    return(
            <div>
                 <div className=" max-sm:w-full   w-full p-4   ">
            <div className="relative    ">
                    <div className=" max-sm:left-[3.5rem] max-sm:w-[21.5rem] absolute  top-0 left-10 bg-[#C3A27C] shadow-sm w-[20rem] h-[26.5rem] rounded-lg   bg-no-repeat   p-4">
    
                        </div>

                    <div className=" flex justify-start  px-4  max-sm:left-[1.5rem] max-sm:w-[90%] absolute top-0 left-5 bg-[#2D2723] w-3/4 shadow-sm h-[24.5rem] rounded-lg  p-4 mt-4">
                
             
                    <div className=' px-5 pt-5 flex flex-col space-y-3'>
                        <p className=' uppercase text-[#C3A27C] py-3 text-2xl font-bold '>Opening Hour</p>
                    {hour.map(({day,startHour,endHour,status})=>(
                        <p  className={` text-md  font-semibold uppercase ${status=='closed'?'text-[#C3A27C]':'text-white'}`} key={day}>{day} :  -------------  {getClosed(day,startHour,endHour,status)}</p> 
                     ))}
                    </div>
                    </div>
            </div>
        </div>
            </div>
    )
}
export default OpeningHour