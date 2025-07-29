import Image from "next/image";
import image1 from "../../public/svg/chooseus/image1.svg";
import truckicon from "../../public/svg/chooseus/Truck.svg";
import bagicon from "../../public/svg/chooseus/Shop bag.svg";
import returnicon from "../../public/svg/chooseus/Return.svg";
import supporticon from "../../public/svg/chooseus/Support.svg";

const Chooseus = () => {
    const details= [
        {
            image:truckicon,
            maintext:"Fast  & Free Shipping ",
            subtext:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
        },
         {
            image:bagicon,
            maintext:"Easy to Shop ",
            subtext:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
        },
         {
            image:returnicon,
            maintext:"Easy to Shop ",
            subtext:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
        },
         {
            image:supporticon,
            maintext:"24/7 Support ",
            subtext:"Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was",
        },

    ]
  return (
    <>
      <section className="w-full flex justify-center  mt-[50px]">
        <div className="w-[85%] flex md:justify-between md:flex-row  flex-col gap-[50px] lg:gap-0 items-center">
          <div className="flex flex-col gap-[50px] ">
            <div className="self-center">
                <h1 className="lg:text-[34px] text-[28px] font-semibold leading-[41px] text-[#2F2F2F]">
                    Why Choose Us
                </h1>
                <p className="text-[#6A6A6A] lg:text-[14px] md:text-[12px] text-[18px]  lg:w-[444px] md:w-[350px] mt-[27px] leading-[24px]">
                    Donec mattis porta eros, aliquet finibus risus interdum at. Nulla vivethe as it was for us to know what was to be done. the
                </p >

            </div>
            <div className="grid grid-cols-2 gap-[50px] ">
               {details.map((item,index )=> <div key={index} className="flex flex-col gap-[12px]  ">
                    <Image src={item.image} alt="a truck icon" className="w-[24px]"/>
                    <p className="font-semibold text-[14px] leading-[22px] text-[#2F2F2F]">
                        {item.maintext} 
                    </p>
                    <p className="lg:text-[14px] text-[12px] leading-[22px] xl:w-[300px] lg:w-[250px] md:w-[180px] text-[#6A6A6A]">
                        {item.subtext}
                    </p>

                </div>
           ) }

            </div>
          </div>
          <div >
            <Image src={image1} alt="image of a interior decoration" className="md:w-[400px] md:block hidden  lg:w-[450px] xl:w-[540px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chooseus;
