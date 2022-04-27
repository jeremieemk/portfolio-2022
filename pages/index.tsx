import type { NextPage } from 'next'
import Head from 'next/head'
import ProjectList from './components/ProjectList'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>JérémieCodes</title>
        <meta name="JérémieCodes" content="JérémieCodes portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='text-4xl font-poppins'>Hello World</h1>
      <ProjectList />
    </div>
  )
}

export default Home
