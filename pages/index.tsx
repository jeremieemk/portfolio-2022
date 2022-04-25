import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JérémieCodes</title>
        <meta name="JérémieCodes" content="JérémieCodes portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-4xl font-poppins'>Hello World</h1>
    </div>
  )
}

export default Home
