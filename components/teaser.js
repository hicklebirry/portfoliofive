const Teaser = () => {
    return (
        <div>
            <div className="container mx-auto px-20">
                <div className="text-center font-extrabold text-lg text-[#3F0D12] mb-8">My Process</div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-2 pb-10 lg:pt-2 lg:pb-5">
                    <div className="p-6 bg-white rounded-lg shadow-xl">
                        <h3 className="text-lg font-bold mb-2 text-[#3F0D12] text-center">
                            Scope
                        </h3>
                        <p className="text-sm leading-6 text-black text-center">
                            The first step to creating successful website is to scope out the requirements. Why do you need a website? Who is the website for? Will you be selling products direct through your website?
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-xl">
                        <h3 className="text-lg font-bold mb-2 text-[#CD533B] text-center">
                            Design
                        </h3>
                        <p className="text-sm leading-6 text-black text-center">
                            Once the scope is agreed on, initial design work can begin. This works best when all parties get involved in the process. Let those idea&apos;s loose!
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-xl">
                        <h3 className="text-lg font-bold mb-2 text-[#CD533B] text-center">
                            Mockup
                        </h3>
                        <p className="text-sm leading-6 text-black text-center">
                            Before deployment, you&apos;ll receive final mockups of your new website in .jpg format for approval. Keep an eye on your email! They come faster than you think.
                        </p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-xl">
                        <h3 className="text-lg font-bold mb-2 text-[#3F0D12] text-center">
                            Deploy
                        </h3>
                        <p className="text-sm leading-6 text-black text-center">
                            Your site will be deployed using the service of your choosing. Many choose SquareSpace or Wordpress in order to self-maintain their websites. For more bespoke websites, deployment can be done through Amazon Web Services, Microsoft Azure or Google Cloud Platform.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teaser;