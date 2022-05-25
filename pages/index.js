import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="          ________  
      (( /========\
      __/__________\____________n_                  owo
  (( /              \_____________]
    /  =(*)=          \
    |_._._._._._._._._.|         !
(( / __________________ \       =o
  | OOOOOOOOOOOOOOOOOOO0 |   = " />
        <p className="">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
