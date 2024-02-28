import { BiSolidCoffeeBean } from "react-icons/bi";

const Footer=()=>{

    return(
        <div className=" max-sm:px-4   px-52 py-32" >
            <div className=" max-sm:grid-cols-1 grid grid-cols-4 place-item-center gap-x-8" >
            <div className="   ">
            <div className=" max-sm:w-full max-sm:justify-center max-sm:flex">
            <img src={require('../assets/images/logo-dark.png')} class="h-32   rounded-full" alt="Flowbite Logo" />

            </div>
            <p className=' text-justify text-white py-8'>
            Welcome to our Basilico Coffee
House. Lorem simply text amet cing elit aenean feugiat. t hendrerit mi pulvinar vel.
            </p>
            </div>
            <div className=" items-center">
            <p className=" text-2xl text-white uppercase font-bold">CONTACT US</p>
            <hr className=" w-20 mt-4 border-[#C3A27C] "></hr>
            <div className=' my-10'>
            <p className=' uppercase text-[#C3A27C] font-bold'>location</p>
            <p className=' text-white'>4517 Washington Ave.</p>
            </div>
            <div>
            <p className=' uppercase text-[#C3A27C] font-bold'>BOOK A TABLE:</p>
            <p className=' text-white'>Basilicofood123@gmail.com</p>
            </div>
            </div>
            <div className=" -yellow-600">
            <p className=" text-2xl text-white uppercase font-bold">HOUR OPEN</p>
            <hr className=" w-40 mt-4 border-[#C3A27C]"></hr>
            </div>
            <div className=" ">
            <p className=" text-2xl text-white uppercase font-bold">NEWLETTERS & EVENT</p>
            <hr className=" w-40 mt-4 border-[#C3A27C]"></hr>
            </div>
            </div>
            <div className='flex  space-x-4 mt-10'>
            <hr className=' w-1/2 border-[#C3A27C] mt-2'></hr>
            <BiSolidCoffeeBean className=' text-[#C3A27C] mt-0 text-xl  ' />

            <hr className=' w-1/2  border-[#C3A27C]  mt-2'></hr>
            </div>
        </div>
    )
}
export default Footer