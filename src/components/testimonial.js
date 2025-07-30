"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState ,useRef} from "react";

import Image from "next/image";
import { motion } from "framer-motion";

import quote from "../../public/svg/testimonial/quote.svg";
import thumbs from "../../public/svg/testimonial/Group.svg";
import image from "../../public/svg/testimonial/Image.svg";
import image1 from "../../public/svg/testimonial/Image1.svg";

const Testimonial = () => {
  const testimonies = [
    {
      profileimage: image,
     username: "Emeka Uzo",
    jobrole: "Architect, UzoDesigns Studio",
    testimony:
      "As an architect, I’m very selective about what goes into my home. The pieces I got here were not only beautifully designed, but also thoughtfully built with quality materials. The attention to detail — from stitching to wood finishing — is remarkable. These are items I’ll proudly showcase to guests and clients."
    },
    {
      profileimage: image1,
      username: "Tolu Daniels",
    jobrole: "Interior Designer, ToluSpaces",
    testimony:
      "Finding furniture that blends effortlessly with different interior themes can be a challenge. But with this brand, every item I’ve used in my projects brings style and balance into the space. Their customer service is responsive, the delivery is on time, and their designs speak for themselves."
    },
    {
      profileimage: image,
      username: "Grace Etim",
    jobrole: "Freelance Writer & Home Blogger",
    testimony:
      "I bought a reading chair and side table to upgrade my writing nook, and I couldn’t be happier. The comfort level is incredible — I often lose track of time in it — and the aesthetic really fits my minimalist vibe. I’ve since featured them in two of my blog posts. Absolutely worth every naira."
    },
    {
      profileimage: image1,
     username: "Ibrahim Yusuf",
    jobrole: "Software Engineer, Andela",
    testimony:
      "After months of searching for the perfect TV console, I finally found it here. The build quality is solid, and the minimalist design fits my space perfectly. Assembly was simple, the delivery came earlier than expected, and everything was intact. I’ve already bookmarked more items for my next order."
    },

    {
      profileimage: image,
     username: "Ngozi Chika",
    jobrole: "Entrepreneur & Creative Director, Studio Glow",
    testimony:
      "I love decorating, but sourcing quality furniture locally has always been tough. Thankfully, this brand changed that. I ordered a custom shelf unit and a lounge chair — both arrived in perfect condition and looked exactly like the pictures. It’s rare to find this kind of design quality and reliability without breaking the bank."
  },
  {
    profileimage: image1,
    username: "David Etuk",
    jobrole: "Digital Marketer, Remote Freelancer",
    testimony:
      "Since I spend most of my day working from home, I invested in a new work desk and chair. Not only do they look great in my small apartment, but they’ve also helped reduce the back pain I used to get from sitting long hours. Honestly, this was one of the best purchases I’ve made all year."
  },
  {
    profileimage: image,
    username: "Ibrahim Yusuf",
    jobrole: "Software Engineer, Andela",
    testimony:
      "After months of searching for the perfect TV console, I finally found it here. The build quality is solid, and the minimalist design fits my space perfectly. Assembly was simple, the delivery came earlier than expected, and everything was intact. I’ve already bookmarked more items for my next order.",
  },
  {
    profileimage: image1,
    username: "Chidinma Uche",
    jobrole: "Creative Director, Studio Nine",
    testimony:
      "Design and functionality rarely meet, but this brand has nailed both. I purchased a full dining set for a client project, and it became the highlight of the room. The textures, the grain on the wood, the comfort of the chairs — all just perfect"
    },
    {
      profileimage: image,
      username: "David Etuk",
    jobrole: "Digital Marketer, Remote Freelancer",
    testimony:
      "Since I spend most of my day working from home, I invested in a new work desk and chair. Not only do they look great in my small apartment, but they’ve also helped reduce the back pain I used to get from sitting long hours. Honestly, this was one of the best purchases I’ve made all year.",
    },
  ];
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    const cardWidth =
      container.firstElementChild.offsetWidth +
        parseInt(getComputedStyle(container).gap) || 24;

    const scrollAmount = cardWidth * 1;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };
  return (
    <>

      <section className="w-[100%] xl:pl-25 lg:pl-25  pl-10  md:pl-15 flex justify-center about-bg items-center h-[470px] md:h-[720px] mt-[50px]">
        <motion.div
          className="w-[100%]  lg:h-[600px] md:h-[550px]   flex  flex-row lg:gap-[116px] gap-[30px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >

          <div className="lg:w-[239px] sm:w-[130px] w-[100px]  md:h-[348px] h-[250px]  ">
            <div className="flex justify-center rounded-[5px] items-center bg-[#3B5D50] lg:h-[185px] sm:h-[130px] h-[80px]">
              <Image src={quote} alt="left quote icon" className="sm:w-[50px] w-[30px] lg:w-auto" />
            </div>
            <div className="w-[100%] h-[338px] flex flex-col gap-[5px] mt-[8px] md:mt-0 items-center  ">
              <div className="flex lg:gap-[15px] gap-[5px] items-center ">
                <Image src={thumbs} alt="thumbs up icon"  className="w-[15px] lg:w-auto"/>
                <p className="lg:text-[36px] sm:text-[18px] text-[14px] font-bold  leading-[167%] text-[#02353C]">
                  Testimonial
                </p>
              </div>
            
              <div className="flex mt-[8px] items-center ">
                <button onClick={() => scroll("left")} aria-label="Scroll Left">
                  <ChevronLeft size={20} color="black " />
                </button>
                <button
                  onClick={() => scroll("right")}
                  aria-label="Scroll Right"
                >
                  {" "}
                  <ChevronRight size={20} color="black" />{" "}
                </button>
              </div>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="md:flex-1 bg-[#3B5D50] lg:h-[600px] md:h-[500px] h-[400px] flex items-center justify-start gap-[24px] px-[40px]  rounded-tl-[30px] rounded-bl-[30px] overflow-x-auto scroll-smooth  no-scrollbar transition-all duration-300"
          >
            {testimonies.map((testimony, index) => (
              <div
                key={index}
                className="md:w-[600px] w-[450px] h-[288px]   bg-white rounded-[10px] md:p-[40px] p-[20px] flex-shrink-0"
              >
                <div className="grid w-full grid-cols-[50px_1fr] gap-[15px]">
                  <Image src={testimony.profileimage} alt="image" />
                  <div className="">
                    <p className="text-[20px] font-bold text-[#02353C] ">
                      {testimony.username}
                    </p>
                    <p className="text-[16px]  text-[#02353C]">
                      {testimony.jobrole}
                    </p>
                  </div>
                  <p className="sm:w-[520px] w-[420px]  md:text-[16px] text-[12px] text-[#02353C] mt-[24px]">
                    {testimony.testimony}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
