import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <div style="width: 300px; height: 300px; background-color: #336699">&nbsp;</div> 
        <title>Python files</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text>🐍</svg>"></link>
      </head> 
      <div>
        <h1>Python downloads</h1>
      </div>
      <body>
        <a href="BulletinBoard.zip" download> Test download</a>
      </body>
    </html>
  )
}
