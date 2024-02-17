import { useEffect, useState } from "react"
import { MenuData } from "../../models/mock-menu";

const SpecialMenuCard=(menu)=>{
    
    const trends=(type)=>{
        if(type=='new'){
           let  text="new/trending"
           return text
        }else if(type=='season'){
           let text='trending/season'
           return text
        }else if(type==''){
            let borderNone='border-none '
            return borderNone   
        }
       
        return `hidden `
    }
    
    const trendsHiden=(type)=>{
        if(type=='new'){
           let  text="new/trending"
           return text
        }else if(type=='season'){
           let text='trending/season'
           return text
        }else if(type==''){
            let borderNone='hidden '
            return borderNone   
        }
       
        return `hidden `
    }
    const [isTrending, setTrending] = useState(MenuData);
    useEffect(()=>{
        setTrending(MenuData)
      
    },[])
    return(
    <div>
        
        <div className= {`mb-4 rounded-lg ${trends(menu.trending)}  border-[#2D2723]  border w-full`}  >
            <div className={`bg-[#2D2723] p-1  text-white text-sm ${trendsHiden(menu.trending)}  uppercase px-4 font-bold rounded-t-lg  w-full`}>
            {trends(menu.trending)}
           
            </div>
            <div className="flex space-x-4 p-3 justify-between ">
                <div className="flex space-x-4">
                <img src={menu.image} class="h-20 w-20 rounded-full" alt="Flowbite Logo" />

                <div>
                  <div className="flex space-x-1">
                  <p className=" uppercase font-bold text-xl hover:duration-300 cursor-pointer hover:text-[#C3A27C]">{menu.name}</p>
                  <p className=" uppercase font-normal  hover:duration-300 cursor-pointer hover:text-[#C3A27C]">-----------------</p>

                  </div>
                   <p className=" font-medium text-md">{menu.description}</p>
                   </div>

                </div>
               
                <p className=" uppercase font-bold text-xl hover:duration-300 text-[#C3A27C]">${menu.price}</p>

            </div>
    </div>
    </div>
    )
}
export default SpecialMenuCard