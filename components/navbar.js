import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="container flex items-center flex-wrap bg-[#CD533B] p-3 sticky top-0 z-50">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Hunter Stubbs
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-[#1C3738] rounded lg:hidden text-gray-800 ml-auto hover:text-gray-800 outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/services">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded transition duration-150 ease-in-out text-white font-bold items-center justify-center hover:bg-[#F2D492] hover:text-[#3F0D12]">
                Services
              </a>
            </Link>
            <Link href="/about">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white transition duration-150 ease-in-out font-bold items-center justify-center hover:bg-[#F2D492] hover:text-[#3F0D12]">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold transition duration-150 ease-in-out items-center justify-center hover:bg-[#F2D492] hover:text-[#3F0D12]">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};