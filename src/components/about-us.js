import { BiSolidCoffeeBean } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { PiCoffeeFill } from "react-icons/pi";
import { RiChatSmileFill } from "react-icons/ri";

const AboutUs =()=>{

    return (
        <div>
           <div className="relative ">
            <div className=" max-sm:top-0 max-sm:h-[102rem] footer-img  absolute bg-[#2D2723]  top-14 h-[40rem] w-full">
                <div className=" pt-24 px-8 pr-16 w-2/5 max-sm:w-full ">
                <div className=" flex space-x-2">
                <BiSolidCoffeeBean className=' text-[#C3A27C] mt-1  ' />

                <p className="  text-justify text-[#C3A27C] uppercase ">WHY CHOOSE US</p>
                </div>
                <p className=" py-4 text-white font-semibold text-5xl uppercase">WE WANT YOU TO ENJOY THEIR COFFEE TO THE FULLEST</p>
                <p className=" font-normal text-justify  text-white py-4">Vertical is a family owned and operated coffee shop which provides a small town experience with big city appeal. It’s warm and friendly environment provides an excellent atmosphere to enjoy a great cup of coffee or sandwich, hang with friends.</p>
                <ul className="text-[#C3A27C] font-semibold ">
                    <li className=" flex space-x-4  ">
                    <FaCheckCircle className="text-white mt-1" />
                        <p>IMPORTED COFFEE AND QUALITY CONTROL</p>
                    </li>
                    <li className=" flex space-x-4 py-2 ">
                    <FaCheckCircle className="text-white mt-1" />
                        <p>COZY SPACE TO ENJOY AND RELAX</p>
                    </li>
                    <li className=" flex space-x-4  ">
                    <FaCheckCircle className="text-white mt-1" />
                        <p>MAKE SURE THE COFFEE TASTE DOESN'T CHANGE</p>
                    </li>
                   
                </ul>

                </div>
            </div>
            <div className=" max-sm:left-5 max-sm:h-[30rem] max-sm:w-11/12 max-sm:top-[75rem] max-sm:relative  absolute about-img h-[47rem] rounded-lg w-1/2  left-1/2">
               
            </div>
            <div className="  px-8  max-sm:left-5 max-sm:mb-3  max-sm:top-[40rem] max-sm:  max-sm:w-11/12 items-center  absolute bg-white rounded-3xl  top-32 h-[32rem] w-80  left-[40%]">
                <PiCoffeeFill className="text-[#C3A27C] w-full my-8  text-center font-bold text-7xl flex justify-center" />
                <p className=" text-center font-bold text-6xl mb-4">658+</p>
                <p className=" text-center uppercase font-semibold py-6 pt-3">CUP COFFEE EVERY DAY</p>
                <hr className=" border-gray-300 border"></hr>
                <RiChatSmileFill className="text-[#C3A27C] w-full my-4  text-center font-bold text-7xl flex justify-center"  />

                <p className=" text-center font-bold text-6xl">98%</p>
                <p className=" text-center uppercase font-semibold py-4">CUSTOMER SATISFACTION</p> 
                </div>
            </div>
        </div>
    )
}
export default AboutUs