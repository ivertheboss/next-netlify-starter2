import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#6872b3"}}>
      <head>
        <title>PI</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥧</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> PI page!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
        <p>This is the first 100000000 (1 million) digits of PI.</p>
   </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
  <p>Back to home</p>
        <a href="http://www.thecoldlemonade.xyz/">
    <input type="button" value="Home" />
    </a>
   </div>
<div style={{display: 'flex', width: 100, height: 100, backgroundColor: '#0059ff'>
        <p>test</p>
  </div>
  </html>
  )
}
