import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#c6c6c6"}}>
      <head>
        <title>PI</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥧</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#ffffff", borderRadius: '15px'}}>
        <h1>Welcome to Wyatt's <u>wonderfull</u> unblocked games page!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
        <p>These are Wyatt's unblocked games</p>
   </div>
<div style={{display: 'flex', height: 100, wordBreak: 'break-all'}}>
        <p>test</p>
<p>test</p>
  </div?
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
  <p>Back to home</p>
        <a href="http://www.thecoldlemonade.xyz/">
    <input type="button" value="Home" />
    </a>
   </div>
  </html>
  )
}
