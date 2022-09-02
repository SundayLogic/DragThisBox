import type { NextPage } from 'next'
import Head from 'next/head'
import Test from '../components/pages/Test'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-[100vh] flex">
      <Head>
        <title>DragTheBox</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main>
        <Test />
      </main>
    </div>
  )
}

export default Home
