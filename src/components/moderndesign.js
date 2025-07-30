import Image from "next/image";
import img1 from "../../public/svg/moderndesign/img1.svg";
import img2 from "../../public/svg/moderndesign/img2.svg";
import img3 from "../../public/svg/moderndesign/img3.svg";
import React from "react";



const Moderndesign = () => {
  return (
    <>
      <section className="flex w-full justify-center mt-[50px] ">
        <div className="w-[85%] flex md:flex-row flex-col gap-[30px] md:justify-between md:items-center ">
          <div className="flex gap-[10px] items-start relative">
            <Image src={img1} alt="image"  className="xl:w-[424px] xl:h-[531px] lg:w-[350px] lg:h-[400px] md:w-[250px] md:h-[300px] w-[300px]"/>
            <Image src={img2} alt="image"  className="xl:w-[109px] xl:h-[] lg:w-[109px] md:w-[80px] md:h-[109px] sm:w-[109px] hidden sm:block "/>
            <Image
              src={img3}
              alt="image"
              className="absolute md:right-0  xl:-bottom-[50px] lg:bottom-0 md:bottom-[50px] sm:-bottom-[10px] sm:right-[100px]  xl:w-[291px] xl:h-[349px] lg:w-[200px] lg:h-[250px] md:w-[100px] sm:w-[220px] hidden sm:block"
            />
          </div>
          <div className="lg:w-[450px] md:w-[380px]">
            <p className="lg:text-[34px] md:text-[28px] text-[24px] w-[300px] sm:w-[100%] font-semibold leading-[41px]  text-[#2F2F2F]">
              We help you make Modern Interior Design
            </p>
            <p className="text-[14px] leading-[24px] text-[#6A6A6A] mt-[28px]">
               Transform your space with elegant, functional, and modern pieces tailored to your taste. Whether you are decorating a new home or refreshing a room, we offer timeless styles and quality craftsmanship to bring your vision to life.
            </p>
            <ul className=" grid grid-cols-2 gap-[20px] lg:mt-[50px] md:mt-[20px] mt-[30px]">
                <li className=" text-[#6A6A6A] lg:text-[18px] text-[14px] lg:w-[194px] ">Thoughtfully designed for modern living</li>
                 <li className=" text-[#6A6A6A] lg:text-[18px] text-[14px] lg:w-[194px]">Built with durable, premium materials</li>
                  <li className=" text-[#6A6A6A] lg:text-[18px] text-[14px] lg:w-[194px]">Easy to style with any interior theme</li>
                   <li className=" text-[#6A6A6A] lg:text-[18px] text-[14px] lg:w-[194px]">Expertly crafted for lasting comfort</li>    
            </ul>
            <button className="w-[122px] h-[50px]  bg-black text-[16px] font-medium text-white rounded-[30px] lg:mt-[30px] mt-[20px] ">
              Explore
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Moderndesign;
