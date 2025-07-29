"use client";
import product1 from "../../public/svg/products/product-1.svg";
import product2 from "../../public/svg/products/product-2.svg";
import product3 from "../../public/svg/products/product-3.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plus, PlusCircle } from "lucide-react";

const Products = () => {
  const products = [
    {
      image: product1,
      name: "Kruzo Aero Chair",
      price: "78.00",
    },
    {
      image: product2,
      name: "Nurdic Chair",
      price: "50.00",
    },
    {
      image: product3,
      name: "Ergonomic Chair",
      price: "43.00",
    },
  ];
  return (
    <>
      <section className="w-full flex  justify-center  sm:h-[400px] h-[450px] items-center  sm:mt-[50px]">
        <div className="w-[85%] h-[400px] sm:h-[400px] flex flex-col sm:flex-row sm:items-start   md:gap-[50px] gap-[30px]  ">
          <div className="self-center sm:self-start flex sm:items-start items-center flex-col gap-[5px] ">
            <h1 className="lg:text-[34px] md:text-[28px] sm:text-[20px]   font-semibold lg:w-[297px] sm:w-[180px] text-[#2F2F2F]">
              Crafted with excellent material.
            </h1>
            <p className="md:w-[228px] sm:w-[180px] md:text-[18px] text-[14px] text-[#6A6A6A] leading-6 md:mt-[27px] sm:mt-[10px]">
              Built with premium, long-lasting materials that combine quality,
              durability, and style made to elevate your space for years.
            </p>
            <button className="w-[120px] h-[50px]  bg-black text-[16px] font-medium text-white rounded-[30px] lg:mt-[30px] mt-[20px] ">
              Explore
            </button>
          </div>
          <div className="flex flex-1 justify-between  ">
            {products.map((product, index) => (
              <motion.div
                key={index}
                className="flex relative  group flex-col md:gap-[50px]  sm:gap-[20px] md:w-[150px] sm:w-[100px] xl:w-auto w-[90px] "
                whileHover={{ scale: 1.1 }}
              >
                <Image
                  src={product.image}
                  alt={`product ${index + 1}`}
                  className=" object-contain  "
                />
                <div className="text-center  ">
                  <p className="font-sembold sm:text-[16px] text-[14px] text-[#2F2F2F] leading-6">
                    {product.name}
                  </p>
                  <p className="font-bold sm:text-[16px] md:text-[18px] text-[14px] text-[#2F2F2F] leading-6">
                    ${product.price}
                  </p>
                  <PlusCircle
                    size={24}
                    color="black"
                    className=" text-white absolute hidden group-hover:block left-[45%] -bottom-[35px]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
