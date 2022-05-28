import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <title>Python files</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>🐍<text y=%22.9em%22 font-size=%2290%22>🐍</text>🐍</svg>">🐍</link>
      </head> 
      <div>
        <h1>Python Programs for windows</h1>
        <a href="BulletinBoard.zip" download> Bulletin Board program</a>
        <a href="tick-tack-toe" download> Tick-tack-toe</a>
        <h1>Python game rescorces</h1>
        </div>
          <p>These files are package installers</p>
          <p>Most games require them</p>
        <a href="pygamePackages.py" download> Pygame packages</a>
      </div>
    </html>
  )
}
