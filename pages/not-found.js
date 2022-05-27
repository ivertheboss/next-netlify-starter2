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
        <h1>Oh no!</h1>
        <h2>404 page not found :(</h2>
      </div>
      <div>
        <div class="tenor-gif-embed" data-postid="17022655" data-share-method="host" data-aspect-ratio="1.32231" data-width="40%"><a href="https://tenor.com/view/tgwtg-that-guy-with-the-glasses-doug-walker-point-computer-gif-17022655">Tgwtg That Guy With The Glasses GIF</a>from <a href="https://tenor.com/search/tgwtg-gifs">Tgwtg GIFs</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
      </div>
    </html>
  )
}
