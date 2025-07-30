import React from "react";
import socials from "../../public/svg/footer/socials.svg";
import Image from "next/image";

const Footer = () => {
    const details = ["About us", "Contact Us", "Blog", "Services"];
  return (
    <>
      <footer className="flex justify-center w-full py-[50px] mt-[50px] bg-[#3B5D50]">
        <div className="w-[85%] flex justify-between items-center">
          <div className="flex flex-col gap-[15px]">
            <p className="font-bold text-[#F9BF29] lg:text-[32px] md:text-[24px] text-[18px] ">
              Woodnest
            </p>
            <Image
              src={socials}
              alt="social media icons"
              className="md:w-[197px] md:h-[43px] w-[125px] "
            />
            <p className="sm:text-[14px ] text-[12px] w-[200px] sm:w-[100%]">
              © {new Date().getFullYear()} Woodnest. All rights reserved.
            </p>
          </div>
          <div className="flex flex-col sm:gap-[10px] gap-[6px]">
           { details.map((item,index)=> <p key={index} className=" hover:underline hover:opacity-65 cursor-pointer lg:text-[18px] leading-[28px] text-[14px]">
              {item}
            </p>)}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
