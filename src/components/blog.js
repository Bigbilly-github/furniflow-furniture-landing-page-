import React from 'react'
import img1 from '../../public/svg/blog/img1.svg'
import img2 from '../../public/svg/blog/img2.svg'
import img3 from '../../public/svg/blog/img3.svg'
import Image from 'next/image'

const Blog = () => {
    const images= [img1, img2, img3];
  return (
            <>
            <section className='w-full flex justify-center  mt-[50px] md:mt-0 lg:mt-[50px] pb-[50px]'>
                <div className='w-[85%]  flex flex-col'>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold md:text-[34px] sm:text-[24px] text-[18px] leading-[41px] text-[#2F2F2F]'>
                            Recent Blog
                        </p>
                        <p className='font-semibold hover:opacity-65 cursor-pointer md:text-[16px] text-[12px] leading-[41px] underline text-[#2F2F2F]'>
                            View All Posts
                        </p>
                    </div>
                    <div className='flex sm:flex-row flex-col sm:justify-between sm:items-center mt-[36px] sm:gap-0 gap-[30px]'>
                      {images.map((image,index)=>  <div key={index} className='xl:w-[360px] lg:w-[280px] md:w-[220px] sm:w-[180px]  cursor-pointer lg:h-[344px]  flex flex-col gap-[20px] '>
                            <Image src={image} alt='a blogpost thumbnail' className='w-[100%]'/>
                            <div>
                                  <p className='lg:text-[18px] md:text-[14px] sm:text-[12px] font-semibold text-[#2F2F2F]'>
                                First Time Home Owner Ideas

                            </p>
                             <p className='lg:text-[14px] md:text-[12px] sm:text-[10px] mt-0.5 font-semibold text-[#2F2F2F]'>
                               <span className='font-normal text-[grey]'>by</span>  Nana Ama  <span className='font-normal text-[grey]'>on</span>  Nov 18th, 2022
                            </p>

                            </div>
                          

                        </div>)}

                    </div>

                </div>
                 
            </section>
            </>
  )
}

export default Blog