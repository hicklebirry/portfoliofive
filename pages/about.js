import Head from 'next/head'
import Image from 'next/image'
import Btnbounce from '../components/btnbounce'
import Teaser from '../components/teaser'
import Techstack from '../components/techstack'
import Timeline from '../components/timeline'
import Script from 'next/script'

export default function About() {
    return (
        <html>
            <Head >
                <title>About - Hunter Stubbs</title>
                <meta name="description" content="Site design and creation by Hunter Stubbs" />
                <link rel="icon" type="image/png" href="https://i.imgur.com/Fp3hUY0.png" />
                <link rel="stylesheet" href="https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css" />
            </Head>
            <body>
                <div className='container md:inline-flex mx-auto mb-10'>

                    <div className='md:w-1/2 sm:w-full grid place-items-center sm:pb-4'>
                        <div className="flex flex-row justify-center items-center mt-32">
                            <Image src={"https://i.imgur.com/Fp3hUY0.png"} width={100} height={100} className="mx-auto" alt='avatar'/>
                        </div>
                        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-[#3F0D12] font-black leading-7 md:leading-10">
                            Get to know me
                        </p>
                        <br /> <br /><br /><br /><br /><br /><br />
                    </div>
                    <div className='md:w-1/2 sm:w-full mb-10'>{/* Section two, position right bigreeens, flex below smaller screens */}
                        <div className='text-center block p-6 border rounded bg-white mx-3 mt-20 break-normal shadow-xl'>
                            <div>Hi, I&apos;m <strong>Hunter</strong>.</div><br />
                            <div>
                                I develop websites for businesses, hobbyists and creators. <br /><br/>
                                
                                I also make a killer cup of coffee.<br /><br/>

                                Completing my Bachelor Degree in Information Technology, majoring in Computer Science at the University of Southern Queensland.<br/><br/>

                                Brewing Bellaroma by Seven Miles &#9749; in Northgate, Queensland <br/>(ask me where!)
                            </div>
                        </div>
                        
                    </div>
                    <Btnbounce />
                </div>
                <hr className='mx-3 mb-20'/>
                <Techstack />
                <hr className='mx-3 mb-20 mt-20'/>
                <div className='mb-20'><Teaser /></div>
                <Script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></Script>
            </body>
        </html>




    )
}