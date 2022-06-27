const Additional = () => {
    return (
        <div className="mx-5">
            <div className="grid place-items-center mt-3 h-40">
                <div className="text-center text-[#CD533B] text-5xl font-black">Explore <span className='text-[#3F0D12]'>Additional</span> Services</div>
            </div>
            <div className='flex items-center justify-center mt-6'>
                <div className='w-full max-w-screen-lg px-10 py-8 bg-white rounded-lg shadow-xl'>
                    <details className="w-full max-w-screen-lg bg-white border border-[#CD533B] cursor-pointer mb-3">
                        <summary className="w-full max-w-screen-lg bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">Peace of Mind Program</summary>
                        <p className="px-4 py-3">
                            The Peace of Mind program is for new and growing
                            businesses that are constantly evolving.
                            It allows participants to access additional support and and
                            make changes to the content on their site after go-live.
                            3, 6, 9 and 12 week programs are available.
                        </p>
                    </details>

                    <details className="w-full max-w-screen-lg bg-white border border-[#CD533B] cursor-pointer mb-3">
                        <summary className="w-full max-w-screen-lg bg-white text-dark flex justify-between px-4 py-3 after:content-['+']">Integrations</summary>
                        <p className="px-4 py-3">
                            Integrations allow you to connect 3rd Party Apps to your site to supercharge user
                            experience. Connect Intercom to start more conversations with visitors, sell products
                            online with Shopify or, Wish return customers a happy birthday with Mailchimp. Get in
                            touch today for the full list of integrations. If your app isn&apos;t available, Zapier or Make
                            can be configured to connect with an additional 5000+ apps.
                        </p>
                    </details>

                    <details className="w-full max-w-screen-lg bg-white border border-[#CD533B] cursor-pointer mb-3">
                        <summary className="w-full max-w-screen-lg bg-white text-dark flex justify-between px-4 py-3  after:content-['+']">
                            Update Service
                        </summary>
                        <p className="px-4 py-3">
                            Already have a website? Need to teach an old dog some new tricks? The Update Service is perfect
                            for those who just need a little touch-up. Options are available for complete redesigns, minor changes
                            or adding new content.
                        </p>
                    </details>
                </div>
            </div>
        </div>
    );
}

export default Additional;