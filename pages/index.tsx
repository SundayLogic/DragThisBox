import type { NextPage } from 'next'
import Head from 'next/head'
import Test from '../components/pages/Test'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-[100vh] flex">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Test />
      </main>
    </div>
  )
}

export default Home
