import { useEffect, useState } from "react"
import SpecialMenuCard from "./cards/special-menu-card"
import { MenuData } from "../models/mock-menu"
import { BiSolidCoffeeBean } from "react-icons/bi";


const SpecialMenu=()=>{
    const [menus,setMenu]=useState([])
    useEffect(()=>{
    setMenu(MenuData)
    console.log(MenuData);
},[])
    return (
        <div className="  ">
            <div className=" max-sm:w-full  w-full max-sm: ">
            <div className=" flex justify-center space-x-2">
            <BiSolidCoffeeBean className=' text-[#C3A27C] mt-5 ' />
            <p className="  text-[#C3A27C] flex justify-center items-center font-medium py-4">SPECIAL COFFEE MENU</p>
            <BiSolidCoffeeBean className=' text-[#C3A27C] mt-5' />
            </div>
            <p className=" max-sm:text-4xl max-sm:text-center max-sm:px-12 max-sm:flex max-sm:item-center  font-black text-4xl flex justify-center text-center ">DEFINITE COFFEE YOU MUST TRY</p>
            </div>
            
        
             <div className=" max-sm:px-4 max-sm:grid-cols-1 my-20 grid grid-cols-2 gap-8 px-40 ">
            {menus.map(data=>(
                 <SpecialMenuCard key={data.id} image={data.img}  price={data.price} name={data.name} trending={data.trending} description={data.description}></SpecialMenuCard>
            
            ))}
            
             
             </div>
               
           
        </div>
    )

}
export default SpecialMenu