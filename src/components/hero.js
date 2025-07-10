"use client"

import Image from 'next/image';
import couch from "../../public/svg/hero/couch.svg"
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <>
    <section className='h-[600px] w-full flex justify-center items-center mt-[100px] bg-[#3B5D50] '>
        <motion.div className='w-[90%] h-[500px] flex justify-between items-center bg-[url("../../public/svg/hero/Dot.svg")]  bg-no-repeat bg-right-top bg-[length:300px_250px] rounded-[20px] p-[30px] flex-col md:flex-row gap-[30px]'
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 2.5, ease: "easeInOut" }}>
            <div className=' flex flex-col justify-between h-[330px]'>
                <h1 className='text-[54px] font-semibold w-[477px]'>
                    Modern Interior Design Studio
                </h1>
                <div className='flex gap-[30px]'>
                    <button className='rounded-[30px] bg-[#F9BF29] w-[150px] h-[50px] text-black font-medium border-0 hover:text-white'>
                        Shop now
                    </button>
                    <button className='rounded-[30px] bg-transparent w-[150px] border border-[#FFFFFF20] h-[50px] text-black font-medium  hover:text-white'>
                        Explore
                    </button>
                </div>

            </div>
            <Image src={couch} alt='image of a couch'/>


        </motion.div>

    </section>
    </>
  )
}

export default Hero