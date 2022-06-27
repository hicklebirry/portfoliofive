import Link from "next/link";
import Image from "next/image";
import Cta from "./cta";

const Hero = () => {
    return (
        <div className="relative">
            <div className="container h-1/3 mx-auto flex flex-col items-center py-12 sm:py-24">
                <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <div className="flex flex-row justify-center items-center">
                        <Image src={"https://i.imgur.com/Fp3hUY0.png"} width={100} height={100} className="mx-auto" />
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#3F0D12] font-black leading-7 md:leading-10">
                        Web Developer<br />
                        <span className="text-[#CD533B]">Coffee Nerd</span>
                    </h1>
                    <p className="mt-5 sm:mt-10 lg:w-10/12 text-[#000F08] font-normal text-center text-sm sm:text-lg">Hi, I'm Hunter. I used to sell software, now I build websites.</p>
                </div>
                <div className="flex justify-center items-center">
                    <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#414288] bg-transparent transition duration-150 ease-in-out hover:border-[#63768D] lg:text-xl lg:font-bold  hover:text-[#63768D] rounded border border-[#414288] text-[#414288] px-4 sm:px-10 py-2 sm:py-4 text-sm">
                        <Link href="./about"><a>About Me</a></Link>
                    </button>
                    <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#414288] bg-transparent transition duration-150 ease-in-out hover:border-[#63768D] lg:text-xl lg:font-bold  hover:text-[#63768D] rounded border border-[#414288] text-[#414288] px-4 sm:px-10 py-2 sm:py-4 text-sm">
                        <Link href="./services"><a>Services</a></Link>
                    </button>
                </div>
                <Cta />
            </div>
        </div>
    );
}

export default Hero;