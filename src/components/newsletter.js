"use client"
import Image from "next/image";

import React from "react";
import couchimg from "../../public/svg/newsletter/sofa1.svg";
import envimg from "../../public/svg/newsletter/envelope.svg";
import rectangle from "../../public/svg/newsletter/Rectangle 15.svg";
import paperplaneimg from "../../public/svg/newsletter/paper-plane.svg";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <>
      <section className="flex w-full justify-center pb-[50px]">
        <motion.div className="w-[85%]  flex justify-between items-center"
         initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}>
          <div className="flex flex-col gap-[24px]">
            <div className="flex gap-[12px] items-center">
              <Image src={envimg} alt="an envelope icon" />
              <p className="sm:text-[18px] text-[16px] font-semibold text-[#2F2F2F] ">
                Subscribe to Newsletter
              </p>
            </div>
            <div className="flex gap-[15px]">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-[10px] pl-[15px] md:w-[262px] sm:w-[220px] w-[120px] sm:text-[14px] text-[11px] text-[#2F2F2F] rounded-[10px] border border-[#C4C4C4]"
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="p-[10px] pl-[15px] md:w-[262px] sm:w-[220px] w-[120px] sm:text-[14px] text-[11px] text-[#2F2F2F] rounded-[10px] border border-[#C4C4C4]"
              />
              <div className="flex  justify-center items-center bg-[#35736E] rounded-[10px] p-[10px]">
                
                <Image
                  src={paperplaneimg}
                  alt="paper plane icon"
                  className=""
                />
              </div>
            </div>
          </div>
          <Image src={couchimg} alt="couch image" className="hidden lg:block" />
        </motion.div>
      </section>
    </>
  );
};

export default Newsletter;
