import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <title>Python files</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text>🐍</svg>"></link>
      </head> 
      <div>
        <p>Bulletin Board program</p>
        <a href="BulletinBoard.zip" download> Download</a>
        <p>Tick-tack-toe</p>
        <a href="tick-tack-toe" download> Download</a>
      </div>
    </html>
  )
}
