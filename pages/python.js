import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#6872b3"}}>
      <head>
        <title>Your own page</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🐍</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> python downloads!</h1>  
      </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
  <p>Bulletin Board program</p>
  <a href="BulletinBoard.zip" download> Download</a>
  </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
  <p>Asteroid dodge game</p>
  <a href="AsteroidDodge.zip" download> Download</a>
  </div>
  </html>
    <html>
      <head>
        <title>Python files</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text></svg>"></link>
      </head> 
      <div>
        <h1></h1>
      </div>
      <body>
        <a href="BulletinBoard.zip" download> Test download</a>
      </body>
    </html>
  )
}
