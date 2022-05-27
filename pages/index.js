import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
       <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👌</text></svg>"></link>
       <h1>This is TheColdLemonade's website!</h1> 
       <h2>Welcome!</h2>
    </div>
  )
}
