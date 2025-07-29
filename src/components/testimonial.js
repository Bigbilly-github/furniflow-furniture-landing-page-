"use client";
import { ArrowBigLeftIcon, ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import profileimg from "../../public/svg/testimonial/profileimg.svg";
import Image from "next/image";

const Testimonial = () => {
  const [isopen, setIsOpen] = useState(false);
  return (
    <>
      <section className="w-ful flex justify-center mt-[50px]">
        <div className="w-[100%] pl-20 flex gap-[50px] items-center">
          <div className="flex flex-col items-center gap-[10px]">
            <h1 className="font-semibold text-[34px] leading-[41px] text-[#2F2F2F]">
              Testimonials
            </h1>
            <div className="flex items-center gap-[10px]">
              <div className="p-2 bg-[green] rounded-[50%]">
                <ArrowLeftIcon size={24} color="white" />
              </div>
              <div className="p-2 bg-[green] rounded-[50%]">
                <ArrowRightIcon size={24} color="white" />
              </div>
            </div>
          </div>

          <div className="flex-1 overflow-x-auto scroll-smooth flex items-center  rounded-r-none  bg-[#02353C] no-scrollbar transition-all duration-300 rounded-[10px] p-[30px] ">
            <div className="w-[559px] bg-white p-[20px] rounded-[20px]  flex flex-col items-center gap-[42px] ">
              <p className="text-[18px] leading-[32px] text-black">
                ‘’Donec nibh magna, interdum quis massa sed, rhoncus laoreet
                quam. Mauris accumsan felis fermentum euismod egestas. Mauris
                ante augue, cursus sit amet arcu a, maximus suscipit nibh.
                Integer vel nibh tellus. Pellentesque in risus non dui venenatis
                sollicitudin sed vitae diam. Fusce tincidunt nisl mi, at
                molestie odio accumsan non. Pellentesque ma’’
              </p>
              <div className="flex flex-col items-center gap-[8px]">
                <Image
                  src={profileimg}
                  alt="profile image"
                  className="rounded-[50%]"
                />
                <p className="text-[18px] text-black">Michelle Anna</p>
                <p className="text-[13px] leading-[32px] text-[#2F2F2F]">
                  CEO, Co-Founder, XYZ Inc
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
