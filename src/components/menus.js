import { FunctionComponent } from "react"
import OpeningHour from "./opening-hour"

const Menus=()=>{
    return(
        <div className="h-screen pl-32 py-28 max-sm:pl-0">
            <div className="relative  ">
 <div className=" px-4">
            <div className=" max-sm:w-full  max-sm:relative absolute top-0 left-0  w-[40%] h-[700px]  bg-no-repeat   p-4">
            <img src={require('../assets/images/about-3.jpg')} class=" rounded-t-xl " alt="Flowbite Logo" />

            </div>
 </div>

  <div className=" max-sm:relative  max-sm:w-full max-sm:px-0 max-sm:left-0 max-sm:flex-col  absolute flex top-0 left-[34%] bg-white rounded-lg w-[65%] h-screen  p-0 mt-11 ">
        <div className=" max-sm:w-full max-sm:px-10  w-1/2 px-20 py-14  ">
            <p className=" uppercase font-bold text-lg  text-[#ce8c41]">Coffee shop since 2003</p>
            <p className=" max-sm:w-full uppercase text-6xl flex  justify-start w-2 py-4  font-bold">We are not your avarage coffee shop</p>
            <p className=" text-base font-normal py-4 ">
            We offer some of the best locally roasted coffee using “Brazilian Santos” beans. Enjoy Dark, Blonde, Jamaican, Italian & Decaf roasts. Also available are our specialty Lattes, Frappes, Mochas, Cappuccinos, Americanos & more …

To see more of our coffee, specialty drinks & food menus, please click the link below. There are many variations of passages of lorem ipsum available but the majority have suffered alteration in some form by injected.
            </p>
            <button  type="button"  className="text-[#fff] bg-[#C3A27C] my-10  text-base flex justify-center hover:duration-300   hover:bg-[#2D2723] hover:text-[#C3A27C] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-60   px-4 py-3 text-center uppercase  mb-2">Click to read more</button>

        </div>
        <div className=" max-sm:w-full   w-full p-4   ">
            <OpeningHour></OpeningHour>
        </div>
  </div>
</div>
        </div>
    )
}
export default Menus