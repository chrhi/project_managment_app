import { styles } from "@/ui/styles"
import heroImage from "@/assets/heroImage.png"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
       <div className="flex flex-row justify-between items-center w-full">
           <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
           sonatrach <br className="sm:block hidden" />{" "}
             <span className="text-gradient"> project management </span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
         R&D
        </h1>
        <p className={`${styles.paragraph} text-gray-50 max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
    </div>
    
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={heroImage} alt="hero icon" className="w-[100%] h-[100%] relative z-[5]" />
      </div>

 
    </section>
  )
}

