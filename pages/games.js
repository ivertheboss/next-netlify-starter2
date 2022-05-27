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
        <iframe width="560" height="315" allow="fullscreen; autoplay; encrypted-media" src="https://games.construct.net/94/latest" frameborder="0" allowfullscreen="true" msallowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" allowpaymentrequest="false" referrerpolicy="unsafe-url" sandbox="allow-same-origin allow-forms allow-scripts allow-pointer-lock allow-orientation-lock allow-popups" scrolling="no"></iframe>  
        <iframe src="//www.gamezhero.com/get-game-code/ab38e9193c5e03752556a0a238ed5080" width="800px" height="600px" frameborder="0"></iframe>   
      </body>
    </html>
  )
}
