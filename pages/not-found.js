import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <title>Page not found...</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😭</text></svg>"></link>
      </head> 
      <div className="container">
        <h1>After a long journey...</h1>
        <h2>We couldent find the page you needed!</h2>
      </div>
    </html>
  )
}
