import React, { useEffect, useState } from "react";
import Jumbotron from "../components/jumbotron"
import Menus from "../components/menus";
import CoffeeCard from "../components/cards/coffee-card";
import SpecialMenu from "../components/special-menu";
import AboutUs from "../components/about-us";
import PrivateEvent from "../components/private-event";
import Footer from "../components/footer";
import { coffeeCard } from "../models/special-card-menu";
import FeedBack from "../components/feedback";
const Home=()=>{
 
  const [cards,setCard]=useState([])
  useEffect(()=>{
    setCard(coffeeCard)
    console.log(coffeeCard ,"890");

},[])
    return (
        <div>
        <div className='  h-screen' >
        <Jumbotron></Jumbotron>
        </div>
        
        <div className='  ' >
        <Menus></Menus>
        </div>

        <div className=' max-sm:mt-[75rem] max-sm:relative max-sm:h-screen pt-44  mt-96 h-screen  justify-center   ' >
       
          
       <div class="relative ">
  <div class=" max-sm:hidden absolute top-[7rem] left-0 h-80 w-full bg-[#D8CBB6] p-4">
   
  </div>

  <div class="  max-sm:px-0  max-sm:p-0 absolute w-full top-0 left-0  h-[26rem] p-8 px-52 mt-0">
    <div className=" max-sm:gap-x-0 max-sm:px-4 max-sm:place-items-start max-sm:space-x-0 max-sm:grid-cols-1 w-full  grid grid-cols-3 place-items-center gap-x-16  ">
          {cards.map(data=>( 
               <CoffeeCard key={data.name} description={data.description} name={data.name} image={data.img} icon={data.icon} ></CoffeeCard>
          ))}
          </div>
  </div>
</div>

          </div>

          <div className=" max-sm:mt-[72rem]  mt-28 w-full  ">
       
      
            <SpecialMenu ></SpecialMenu>
       
          </div>

          <div className="  h-screen max-s ">
          <AboutUs></AboutUs>
          </div>

          <div className="  mt-36 h-screen max-sm:mt-[62rem] ">
          <PrivateEvent></PrivateEvent>
          </div>

          <div className="max-sm:mt-[62rem]">
            <FeedBack></FeedBack>
           
          </div>
     

   

   
    
            
          <div class=" bg-[#2D2723] footer-img max-sm:mt-[62rem]  ">
  <Footer></Footer>
          </div>

        
        </div>
        
          );
}
export default Home