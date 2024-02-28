// Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCoffeeBean } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBagFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCoffeeTogo } from "react-icons/bi";

function NavBar(){
    return (
    <div >
        <div className=' max-sm:hidden my-6 px-60 px text-white flex justify-between'>
          <div className='flex space-x-4 '>
              <div className="flex items-center justify-center mt-2 bg-[#C3A27C] rounded-full h-12 w-12">
                  <FaLocationDot className="text-white" />
             </div>
            <div>
              <p className=' uppercase font-bold  text-lg'>Location;</p>
              <p className='uppercase font-bold  text-lg'>448 West Foxrun St. Bronx;</p>

            </div>
          </div>
          <div className='flex space-x-4  '>
         
          <div >
              <p className=' uppercase font-bold  text-lg flex justify-end'>CALL DELIVERY</p>
              <p className='uppercase font-bold  text-lg flex justify-end'>(734) 665-1852 or (770) 942-7739</p>

            </div>
            <div className="flex items-center justify-center mt-2 bg-[#C3A27C] rounded-full h-12 w-12">
                  <BiSolidCoffeeTogo className="text-white text-2xl" />
             </div>
             
           
          </div>
        </div>
        <div className=' flex justify-center'>
            

<nav class="bg-[#2D2723]  rounded-full w-10/12  border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between  mx-auto p-6">
      <div>
      <RxHamburgerMenu className=' text-white font-bold text-4xl' />
      </div>
    <div className=' max-sm:hidden flex  max-w-screen-xl items-center space-x-60 mx-auto'>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex justify- flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#2D2723] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className='flex space-x-2'>
        <BiSolidCoffeeBean className=' text-[#C3A27C] mt-1' />
          <a href="#" class="block py-2 px-3 text-[#FAF1E3] uppercase rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">MENU</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">reservation</a>
        </li>
       
      </ul>
    </div>
    <div href="https://flowbite.com/" class=" max-sm:relative bg-[#FAF1E3] h-32 w-32 pl-5  rounded-full flex absolute mt-28 left-[35.5%] transform -translate-x-1/2 -translate-y-1/2 items-center space-x-3 rtl:space-x-reverse">
        <img src={require('../assets/images/logo.png')} class="h-20     rounded-full" alt="Flowbite Logo" />
        {/* <span class="self-center  text-white text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
    </div>

    <div class=" max-sm:hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#2D2723] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-[#FAF1E3]  rounded md:bg-transparent md:text-white md:p-0 dark:text-white md:dark:text-blue-500 uppercase" aria-current="page">page</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">blog</a>
        </li>
        <li>
          <a href="#" class="block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">contact</a>
        </li>
      
      </ul>
    </div>
     
      </div>
      <div>
      <ul class="font-medium flex justify- flex-col p-4 md:p-0 mt-4   md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[#2D2723] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       
        <li class=" border-r border-gray-500 border-solid block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase">
           <FaSearch />   
        </li>
        <li>
        <BsBagFill class="block py-2 px-3 text-[#FAF1E3] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent uppercase" />    
        </li>
       
      </ul>
      </div>
    
  
  </div>
  
</nav>

        </div>
    </div>
    )
}
export default NavBar