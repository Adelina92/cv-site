import Head from 'next/head'
import Header from '../src/pages/common/Header'
import { Footer } from '../src/pages/common/Footer'

export default function Home() {
  return (
    <>
    <Head>
      <title>Index page</title>
    </Head>
    <Header/>
    <h1>Hello World</h1>
    <Footer/>
    </>
  )
}
