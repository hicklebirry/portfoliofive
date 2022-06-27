import Additional from '../components/additional'
import Cta from '../components/cta'
import Modals from '../components/modals'
import Head from 'next/head'
import Script from 'next/script'

export default function Services() {
    return (
        <html className="container mb-20">
            <Head>
                <title>Services - Hunter Stubbs</title>
                <meta name="description" content="Web Development Services" />
                <link rel="icon" type="image/png" href="https://i.imgur.com/Fp3hUY0.png" />
            </Head>
            <body>
                <Modals />
                <Cta />
                <hr className='md:mx-40 mt-12 sm:mx-40 mx-5' />
                <Additional />
                <Cta />
            </body>
        </html>

    )
}