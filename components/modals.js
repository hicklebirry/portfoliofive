import Cta from "./cta";

const Modals = () => {
    return (
        <div className="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <div className="grid place-items-center mt-3 h-40">
                <div className="text-center text-[#CD533B] text-5xl font-black">Explore <span className='text-[#3F0D12]'>Standard</span> Services</div>
            </div>
            <div className="mb-6 pb-2 md:mb-12 md:pb-0">
                All services are inclusive of first-time SEO setup and configuration. This helps your site be more visible in Google Searches!
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center md:mx-auto mx-5">
                <div block className="rounded-lg shadow-lg bg-white">
                    <div className="mt-8 text-4xl">
                        <i className="fa fa-file-text-o"></i>
                    </div>
                    <div className="p-6">
                        <h4 className="text-2xl font-semibold mb-4">Single-Page Website</h4>
                        <hr />
                        <em className="mt-4 text">Displays all content on a sinlge page (e.g. example.com)<br /><br /></em>
                        <ul className="text-center list-none">
                            <li>Free 60 minute consultation<br /><br /></li>
                            <li>Responsive, mobile-first design<br /><br /></li>
                            <li>Low storage requirements<br /><br /></li>
                            <li>Quick to develop<br /><br /></li>
                            <li>Easy to deploy and maintain<br /><br /></li>
                        </ul>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white">
                    <div className="mt-8 text-4xl">
                        <i className="fa fa-files-o"></i>
                    </div>
                    <div className="p-6">
                        <h4 className="text-2xl font-semibold mb-4">Multi-Page Website</h4>
                        <hr />
                        <em className="mt-4">Displays content on multiple pages (e.g. example.com/about etc.)<br /><br /></em>
                        <ul className="text-center list-none">
                            <li>2x Free 60 minute consultations<br /><br /></li>
                            <li>Responsive, mobile-first design<br /><br /></li>
                            <li>Low/Medium storage requirements<br /><br /></li>
                            <li>Quick to develop<br /><br /></li>
                            <li>Easy to deploy and maintain<br /><br /></li>
                        </ul>
                    </div>
                </div>
                <div className="rounded-lg shadow-lg bg-white">
                    <div className="mt-8 text-4xl">
                        <i className="fa fa-cubes"></i>
                    </div>
                    <div className="p-6">
                        <h4 className="text-2xl font-semibold mb-4">Engage-Plus Website</h4>
                        <hr />
                        <em className="mt-4">Choose between Single-Page or Multi-Page Website Design<br /><br /></em>
                        <ul className="list-[] text-center">
                            <li>3x Free 60 minute consultations<br /><br /></li>
                            <li>Built to increase traffic and conversions<br /><br /></li>
                            <li>Varying storage requirements<br /><br /></li>
                            <li>Responsive, mobile-first design<br /><br /></li>
                            <li>Connect your business apps using Zapier (optional)<br /><br /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modals;