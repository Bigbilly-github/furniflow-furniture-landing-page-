"use client";
import { Menu, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const navitems = ["Home", "Services", "Blog", "Contact Us"];
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex w-full fixed top-0 left-0 right-0 z-100 justify-center items-center md:h-[100px] h-[80px]  bg-[#3B5D50]">
        <div className="flex justify-between items-center w-[85%]">
          <div className="flex gap-[20px] items-center">
            <div className="relative ">
              <Menu
                size={24}
                onClick={() => setOpen(!open)}
                color="white"
                className="md:w-[24px] md:hidden md:h-[24px] w-[18px] h-[18px]"
              />
              <div
                className={`absolute ${
                  open ? "block" : "hidden"
                } top-[30px]   rounded-[5px] -left-[20px]   h-auto p-[15px] w-[130px] bg-slate-900`}
              >
                <nav className="">
                  <ul className="flex flex-col gap-[15px] text-[16px] font-medium">
                    {navitems.map((item, index) => (
                      <li
                        key={index}
                        className={`${
                          item === "Home"
                            ? "underline underline-offset-6 decoration-[#F9BF29] decoration-3  opacity-100"
                            : ""
                        } text-[14px]  hover:opacity-100 text-white opacity-50`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>

            <p className="font-bold text-[#F9BF29] lg:text-[32px] md:text-[24px] text-[18px] ">
              Woodnest
            </p>
          </div>

          <div className="flex lg:gap-[50px] gap-[30px] lg:mr-[30px]">
            <nav className="hidden md:block">
              <ul className="flex lg:gap-[50px] gap-[30px] text-[18px] font-medium">
                {navitems.map((item, index) => (
                  <li
                    key={index}
                    className={`${
                      item === "Home"
                        ? "underline underline-offset-6 decoration-[#F9BF29] decoration-5  opacity-100"
                        : ""
                    } hover:opacity-100 text-white opacity-50`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex gap-[20px]">
              <User
                size={24}
                color="white"
                className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
              />
              <ShoppingCart
                size={24}
                color="white"
                className="md:w-[24px] md:h-[24px] w-[18px] h-[18px]"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
