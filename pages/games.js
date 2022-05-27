import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
      <head>
        <title>TheColdLemonade's games</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎮</text></svg>"></link>
      </head> 
      <div className="container">
        <h1>Game page!</h1>  
      </div>
      <body>
        <a target="_blank" href="https://www.y8.com/games/stick_slasher"><img alt="Stick Slasher" class="playable" src="https://img-hws.y8.com/cloud/v2-y8-thumbs-small-thumbnails-001/148410/small.gif" /><br />Stick Slasher<br />Play Now!</a>
      </body>
    </html>
  )
}
