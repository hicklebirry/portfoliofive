import Head from 'next/head'
import 'tw-elements'

export default function Thanks() {
    return (
        <html>
            <Head >
                <title>Contact - Hunter Stubbs</title>
                <meta name="description" content="Site design and creation by Hunter Stubbs" />
                <link rel="icon" type="image/png" href="https://i.imgur.com/Fp3hUY0.png" />
            </Head>
            <body>
                <div className='container h-full md:inline-flex mt-10 mb-10 mx-auto'>
                    <div className='md:w-3/5 sm:w-4/5 grid place-items-center sm:pb-4'>
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#3F0D12] font-black leading-7 md:leading-10">
                            Get in touch<br />
                            <span className="text-[#CD533B]">Today</span><br /> <br />
                        </h1>
                    </div>
                    <div className="block p-6 rounded-lg shadow-lg bg-[#CD533B] md:w-2/6 sm:w-full mx-5">
                        <form action='https://submit-form.com/jdIdxzOx'>
                            <input
                                type="hidden"
                                name="_redirect"
                                value="/thanks"
                            />
                            <div className="form-group mb-6">
                                <input type="text" name='name' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-[#F2D492]
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#F2D492] focus:outline-none" id="name"
                                    placeholder="Name"
                                    required="true" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="text" name='phone' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-[#F2D492]
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#F2D492] focus:outline-none" id="phone"
                                    placeholder="Phone (0412 345 678)"
                                    required="true" />
                            </div>
                            <div className="form-group mb-6">
                                <input type="email" name='email' className="form-control block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-[#F2D492]
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-[#F2D492] focus:outline-none" id="email"
                                    placeholder="Email address"
                                    required="true" />
                            </div>
                            <div className="form-group mb-6">
                                <textarea
                                    className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-[#F2D492]
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-[#F2D492] focus:outline-none
      "
                                    name="message"
                                    id="message"
                                    rows="3"
                                    placeholder="Message"
                                    required="true"
                                ></textarea>
                            </div>
                            <button type="submit" className="
                            w-full
                            px-6
                            py-2.5
                            bg-[#414288] 
                            text-white
                            font-medium
                            text-xs
                            leading-tight
                            uppercase
                            rounded
                            shadow-md
                            hover:bg-[#63768D] hover:shadow-lg
                            focus:bg-[#63768D] focus:shadow-lg focus:outline-none focus:ring-0
                            active:bg-[#63768D] active:shadow-lg
                            transition
                            duration-150
                            ease-in-out">Send</button>
                            <p className='text-center'>Thank you for your inquiry. I usually respond quickly, however it may take up to 48 hours in some cases.</p>
                        </form>
                    </div>
                </div>
                <Script src="./node_modules/tw-elements/dist/js/index.min.js"></Script>
            </body>
        </html>


    )
}