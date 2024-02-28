import { BiSolidCoffeeBean } from "react-icons/bi";
import PatternerSlider from "./patterner";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const FeedBack = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <div className="relative h-[45rem] max-sm:hidden ">
        {/* Red Background Section */}
        <div className="absolute  w-full top-28">
          <div className="relative h-[38rem] ">
            {/* Parallax Effect Section */}
            <div className="relative h-[38rem] overflow-hidden">
              {/* Background Image for Parallax Effect */}
              <div className="absolute inset-0 bg-fixed bg-image-menus z-0"></div>

              {/* Overlay for Parallax Effect */}
              <div className="absolute inset-0 bg-black opacity-50 z-1"></div>

              {/* Content in the Parallax Section */}
              <div className="relative z-2 flex flex-col   p-0 items-center justify-center h-full text-white  font-bold">
                <div className=" flex justify-between space-x-2 ">
                  <BiSolidCoffeeBean className=" text-[#C3A27C] mt-1  " />

                  <p className=" text-[#C3A27C]   ">CUSTOMER TESTIMONIAL</p>
                  <BiSolidCoffeeBean className=" text-[#C3A27C] mt-1  " />
                </div>
                <div>
                  <p className=" text-5xl py-2">WHAT CUSTOMERS SAY?</p>
                </div>
                {/* <div className=" mt-10   bg-red-950">
                  <Slider {...settings}>
                    <div>
                      <h3 className=" text-7xl bg-black ">1rjhtrjtjhtrjhtrjhtjhtrjh</h3>
                    </div>
                    <div>
                      <h3>2</h3>
                    </div>
                    <div>
                      <h3>3</h3>
                    </div>
                    <div>
                      <h3>4</h3>
                    </div>
                    <div>
                      <h3>5</h3>
                    </div>
                    <div>
                      <h3>6</h3>
                    </div>
                  </Slider>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute flex w-full justify-center">
          {/* Image */}
          <img
            src={require("../assets/images/item-3.png")}
            class="max-sm:w-[15rem] max-sm:h-[15rem] rounded-full"
            alt="Flowbite Logo"
          />
        </div>
      </div>
      <div className=" bg-[#E8DCC9] w-full h-52 mt-0 px-28 max-sm:px-0 ">
        <PatternerSlider></PatternerSlider>
      </div>
    </div>
  );
};
export default FeedBack;
