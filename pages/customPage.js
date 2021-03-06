import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#c6c6c6"}}>
      <head>
        <title>Your own page</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📄</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#ffffff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> page form page!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdccP9o97w_IMoefAAWZsCX-r9_saYZ_6ffI7xPiv6Ugl_1VQ/viewform?embedded=true" width="640" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
   </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
    <p>Back to home</p>
    <a href="http://www.thecoldlemonade.xyz/">
    <input type="button" value="Home" />
    </a>
   </div>
  </html>
  )
}
