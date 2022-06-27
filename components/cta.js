import Link from "next/link";

const Cta = () => {
    return (
        <div className="flex justify-center items-center mt-24">
            <button href="./contact" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#414288] bg-[#414288] transition duration-150 ease-in-out hover:bg-[#63768D] lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-transparent py-2 sm:py-4 text-sm">
                <Link href="./contact"><a>Get Quote</a></Link>
            </button>
        </div>
    );
}

export default Cta;