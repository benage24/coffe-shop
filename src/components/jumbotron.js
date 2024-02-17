import NavBar from "./navbar"

const Jumbotron = () =>{
    return (
        <div className="">
  



<div className="relative ">
  <div className="absolute top-0 left-0 jumbotron w-full h-screen bg-cover bg-no-repeat   p-4">
   
  </div>

  <div className="absolute top-0 left-0 bg-black w-full  h-screen  p-4 mt-0 opacity-45">
  {/* <NavBar></NavBar> */}
  
  </div>
</div>
<div className=' absolute top-0 w-full left-0  mt-4 '>
    <div className=' '>
    <NavBar></NavBar>
    </div>
     <div className=' mt-40 flex justify-center items-center  '>
      <div>
      <p className=' text-[#C3A27C] flex justify-center items-center text-xl'>- Welcome to Balisco Coffee Shop -</p>
      <p className='flex justify-center items-center text-5xl my-4 uppercase font-bold text-white'>Our passion is in your coffee</p>
      <p className='flex justify-center items-center text-lg font-normal text-white'>Malewa is th perfect spot in Kinshasa to celebrate a special occasion</p>
      <p className='flex justify-center items-center text-lg font-normal  text-white'>or to simply head out for a bite to eate</p>

      {/* buuton */}
      <div className='flex space-x-4 justify-center items-center my-12 '>
      <button  type="button"  className="text-[#fff] bg-[#C3A27C] text-base hover:duration-200  hover:bg-[#fff] hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-48   px-4 py-3 text-center uppercase  mb-2">View all MENU </button>
      <button   type="button"  className="text-[#000] bg-[#fff] text-base hover:duration-200  hover:bg-[#C3A27C] hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg w-48   px-4 py-3 uppercase text-center  mb-2">Book a table </button>

      </div>
      </div>
     </div>
     </div>




    </div>
    )
}
export default Jumbotron