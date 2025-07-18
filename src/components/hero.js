"use client"

import Image from 'next/image';
import couch from "../../public/svg/hero/couch.svg"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
    <section className='sm:h-[550px] lg:h-[620px] h-[400px] w-full flex justify-center items-center mt-[80px] bg-[#3B5D50] '>
        <motion.div className='w-[90%] sm:h-[500px] h-[380px] flex  lg:flex-row justify-between items-center lg:bg-[url("../../public/svg/hero/Dot.svg")]  bg-no-repeat bg-right-top bg-[length:200px_300px] rounded-[20px] p-[30px] flex-col  gap-[30px]'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2.5, ease: "easeInOut" }}>
            <div className=' flex flex-col justify-between  lg:items-start items-center xl:h-[280px] '>
                <h1 className='xl:text-[54px] md:text-[40px] sm:text-[32px] text-[20px] font-semibold lg:w-[533px]'>
                    Modern Interior Design Studio
                </h1>
                <div className='flex gap-[20px] mt-[30px] xl:mt-0'>
                    <button className='rounded-[30px] bg-[#F9BF29] hover:bg-[#524930] w-[150px] h-[50px] text-black font-medium border-0 hover:text-white'>
                        Shop now
                    </button>
                    <button className='rounded-[30px] bg-transparent w-[150px] text-white hover:bg-[#F9BF29] border border-[#FFFFFF20] h-[50px] font-medium  hover:text-white'>
                        Explore
                    </button>
                </div>

            </div>
            <Image src={couch} alt='image of a couch' className='object-contain sm:w-[400px] sm:h-[400px] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[700px] xl:h-[700px]'/>


        </motion.div>

    </section>
    </>
  )
}

export default Hero