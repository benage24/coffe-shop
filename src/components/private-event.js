import { useEffect, useState } from "react"
import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
const PrivateEvent=()=>{
    const eventNames = ['PRIVATE COFFEE ROOM', 'BIRTHDAY PARTY', 'WORKING & MEETING'];
    const [isToggled, setToggled] = useState(false);

    // const handleToggle = () => {
    //   setToggled(!isToggled);
    // };
  
    const [roomToggles, setRoomToggles] = useState([false, false, false]);

  const handleToggle = (index) => {
    setRoomToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = !newToggles[index];
      return newToggles;
    });
  };
  const hiddenTexts = [
    "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec. - Room 1",
    "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec.",
    "Donec aliquet, erat non tempor hendrerit, est augue viverra augue, non dignissim metus urna eget ante. Fusce fermentum mauris nec.",
  ];
    return(
        <div>

          <div className=" flex w-full max-sm:h-screen  max-sm:flex-col ">
            <div className=" max-sm:w-full max-sm:h-screen max-sm:pl-0  w-1/2 flex justify-items-center  pl-72 ">
                <div className="relative">
                        <div className=" max-sm:w-[30rem]  max-sm:px-4  max-sm:relative  max-sm:left-0  rounded-xl absolute left-14  w-[25rem] ">
                        <img src={require('../assets/images/private-event-1.jpg')} width={900} class=" rounded-xl h-[36rem] w-full   " alt="Flowbite Logo" />
  
                            </div>
                            <div className=" max-sm:px-4 max-sm:mt-4 max-sm:relative max-sm:w-full max-sm:h-2/3 l max-sm:mr-0    mr-10 mt-96 absolute w-72  rounded-lg">
                            <img src={require('../assets/images/private-event-2.jpg')} class="max-sm:w-[33rem] max-sm: max-sm:h-[30rem] rounded-xl    " alt="Flowbite Logo" />

                         </div>
                </div>
            </div>
            <div className="  max-sm:mt-96 max-sm:px-4 max-sm:w-full w-3/5 px-32  ">
               
                <div className=" flex space-x-2">
                <BiSolidCoffeeBean className=' text-[#C3A27C] mt-1  ' />

                <p className=" uppercase  font-semibold text-lg text-[#C3A27C] ">PRIVATE EVENT</p>
                </div>
                <p className=" uppercase font-bold text-5xl pt-3 pb-10 ">THE PERFECT VENUE FOR YOUR SPECIAL EVENT</p>
                <p className=" text-sm font-normal ">Our cafe is the perfect venue for your special event, you can organize a light birthday party, we will decorate it to your liking, or meet friends and relatives, a partner, and the perfect place to work.</p>
                <div className=" py-6 ">
                {roomToggles.map((isToggled, index) => (
                    <div key={index} className="flex flex-col space-x-2 ">
                        <span className="flex space-x-2" >
                              
                           {
                            isToggled?  <FaMinus  onClick={() => handleToggle(index)} className="font-bold text-[#C3A27C] cursor-pointer  mt-2  " />: <FaPlus  onClick={() => handleToggle(index)} className="font-bold text-[#C3A27C] cursor-pointer  mt-2  " />
                           }
                            <p className={`uppercase font-bold text-lg pt-1  transition-opacity ease-in-out duration-300 `}>
                                {eventNames[index]}
                            </p>
                        </span>
                    <p className={` py-3  transition-opacity ease-in-out duration-300 ${isToggled ? '' : 'hidden'}`}>
                        {hiddenTexts[index]}
                    </p>
                    </div>
                    
      ))}
  
      
                </div>
                <button  type="button"  className="text-[#fff]  bg-[#C3A27C] my-10  text-base flex justify-center hover:duration-300   hover:bg-[#2D2723] hover:text-[#C3A27C] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-60   px-4 py-3 text-center uppercase  mb-2">schedule an event</button>

                             

         
            </div>
            </div>   
        </div>
       
    )
}
export default PrivateEvent