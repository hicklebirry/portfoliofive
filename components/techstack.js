import Image from "next/image";

const Techstack = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <div className=" mx-auto max-w-screen-sm px-20">
                <div className="text-center font-extrabold text-lg text-[#3F0D12] mb-8">My Current Stack</div>
                <div className="grid grid-cols-1 pt-2 pb-10 lg:pt-2 lg:pb-5 content-center">
                    <div className="p-6 bg-white rounded-lg text-center text-gray-800 shadow-xl">
                        <Image src={"/png/001-physics.png"} width={36} height={36} className="mx-auto"/>&nbsp;&nbsp;
                        <Image src={"/png/002-html-5.png"} width={36} height={36} className="mx-auto"/>&nbsp;&nbsp;
                        <Image src={"/png/003-js.png"} width={36} height={36} className="mx-auto"/>&nbsp;&nbsp;
                        <Image src={"/png/004-c.png"} width={36} height={36} className="mx-auto"/>&nbsp;&nbsp;
                        <Image src={"/png/005-python.png"} width={36} height={36} className="mx-auto"/>&nbsp;&nbsp; 
                        <Image src={"/png/006-node-js.png"} width={36} height={36} className="mx-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Techstack;