import Image from "next/image";
import React from "react";
import product1 from "../../public/svg/display/product-1.svg";
import product2 from "../../public/svg/display/product-2.svg";
import product3 from "../../public/svg/display/product-3.svg";

const Display = () => {
    const displayitems = [
        {
            image:product1,
            maintext:"Nordic Chair",
            subtext:"Donec mattis porta eros, aliquet finibus risus in. Donecd",

        },
          {
            image:product2,
            maintext:"Kruzi Aero",
            subtext:"Donec mattis porta eros, aliquet finibus risus in. Donecd",
            
        },
         {
            image:product3,
            maintext:"Ergonomic Chair",
            subtext:"Donec mattis porta eros, aliquet finibus risus in. Donecd",
            
        }
    ]
  return (
    <>
      <section className="flex w-full justify-center mt-[50px] xl:mt-[200px] pb-[50px]">
        <div className="w-[85%]  flex justify-between   ">
         {displayitems.map((items,index)=> <div key={index} className="flex gap-[30px] items-center ">
            <div className="bg-[#35736E30] w-[125px] h-[91px] relative rounded-[10px]">
              <Image
                src={items.image}
                alt="image of a furniture item"
                className="absolute bottom-0 left-[10px] w-[100px]"
              />
            </div>

            <div className="flex flex-col gap-[11px] ">
                <p className="text-[14px] font-bold text-black">
                   {items.maintext}
                </p>
                <p className="text-[14px] text-[#6A6A6A] w-[211px]">
                   {items.subtext}
                </p>
                <p className="text-[12px] font-bold hover:underline text-[#6A6A6A]">
                    Read More
                </p>

            </div>
          </div>)}
        </div>
      </section>
    </>
  );
};

export default Display;
