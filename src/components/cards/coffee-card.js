import React, { useState } from 'react';
const CoffeeCard=()=>{
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
 
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
   
    };
    const imageUrl = require('../../assets/images/bakery.jpg')
    const containerStyle = {
      backgroundImage: `url(${imageUrl})`,
    
      // Add more styles if necessary
    };
  
    const dynamicColor = isHovered ? 'red' : 'blue';
    return (
        <div>
            
            <div class="relative shadow-sm " >
 
  <div style={containerStyle} class="max-sm:w-[28.5rem]  p-4 mb-4 bg-cover bg-no-repeat  rounded-lg w-96 h-[34rem]" >

  </div>

  {/* <!-- Second card --> */}
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} class={`${isHovered?' opacity-50':' opacity-15'} absolute top-0 left-0 bg-black p-4 w-96 h-[34rem] max-sm:w-[28.5rem]    rounded-lg opacity-15`}>

  </div>
  <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  class={` ${isHovered?' border border-[#D8CBB6] transition-opacity duration-300':' border-none'} space-y-10 absolute top-3 left-3  flex justify-center  flex-col items-center p-4 max-sm:w-[28.5rem]    pt-40 w-[22.2rem] h-[32.5rem]  rounded-lg`} >
            <p className={`text-3xl font-bold uppercase flex justify-center transition-opacity duration-300    ${isHovered ? 'text-white ' : ' text-white mt-72'}`}>- coffee -</p>
            <p className= {` ${isHovered?'transition-opacity duration-300 ':'hidden'} text-white text-lg`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>

  </div>
</div>


        </div>
)
}
export default CoffeeCard