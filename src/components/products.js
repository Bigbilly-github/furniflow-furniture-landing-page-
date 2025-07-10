'use client'
import product1 from '../../public/svg/products/product-1.svg'
import product2 from '../../public/svg/products/product-2.svg'
import product3 from '../../public/svg/products/product-3.svg'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Plus, PlusCircle } from 'lucide-react';

const Products = () => {
    const products= [
        {
            image:product1,
            name:"Kruzo Aero Chair",
            price:"78.00"
        },
        {
            image:product2,
            name:"Nurdic Chair",
            price:"50.00"
        },
        {
            image:product3,
            name:"Ergonomic Chair",
            price:"43.00"
        }
        
    ]
  return (
        <>
        <section className='w-full flex justify-center h-[800px] items-center bg-[#D9D9D9]'>
            <div className='w-[90%] h-[500px]  flex items-start  gap-[50px] '>
                <div>
                    <h1 className='text-[34px] font-semibold w-[297px] text-[#2F2F2F]'>
                        Crafted with excellent material.
                    </h1>
                    <p className='w-[228px] text-[#6A6A6A] leading-6 mt-[27px]'>
                        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done.
                    </p>
                    <button className='w-[120px] h-[50px] bg-black text-[16px] font-medium text-white rounded-[30px] mt-[30px] '>
                        Explore
                    </button>
                </div>
                <div className='flex flex-1 justify-between '>
                    {products.map((product,index)=> (
                    <motion.div key={index} className='flex relative  group flex-col gap-[50px]'
                     whileHover={{scale:1.1}}>
                        <Image src={product.image} alt='product 1' className=' object-contain'/>
                        <div className='text-center  '>
                            <p className='font-sembold text-[16px] text-[#2F2F2F] leading-6'>
                               {product.name}
                            </p>
                            <p className='font-bold text-[18px] text-[#2F2F2F] leading-6'>
                                ${product.price}

                            </p>
                            <PlusCircle size={24} color='black' className=' text-white absolute hidden group-hover:block left-[45%] -bottom-[35px]'/>
                        </div>
                    </motion.div>
))}

                </div>

            </div>

        </section>
        </>
  )
}

export default Products