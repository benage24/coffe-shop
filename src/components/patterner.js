import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function PatternerSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    arrows: false, // Remove arrow navigation

    responsive: [
        {
          breakpoint: 1024, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Adjust the breakpoint as needed
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div className=" max-sm:pt-0 pt-20 ">
      <Slider {...settings} className="  flex max  ">
        
        <div className=" max-sm:bg-black w-full h-[10rem]  px-12">
            
          <img
            src={require("../assets/images/img-1.png")}
            class="  rounded-xl max-sm:w-full     "
            alt="Flowbite Logo"
          />
        </div>
        <div className="  px-12">
            
          <img
            src={require("../assets/images/img-2.png")}
            class=" rounded-xl w-full h-[5rem]      "
            alt="Flowbite Logo"
          />
        </div>
        <div className="  px-12">
          <img
            src={require("../assets/images/img-3.png")}
            class=" rounded-xl w-[50rem]     "
            alt="Flowbite Logo"
          />
        </div>
        <div className="  px-12">
          <img
            src={require("../assets/images/img-4.png")}
            class=" rounded-xl w-[50rem]    "
            alt="Flowbite Logo"
          />
        </div>
        <div className="  px-12">
          <img
            src={require("../assets/images/img-5.png")}
            class="] rounded-xl    "
            alt="Flowbite Logo"
          />
        </div>
      </Slider>
    </div>
  );
}
