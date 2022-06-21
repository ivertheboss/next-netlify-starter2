import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#c6c6c6"}}>
      <head>
        <title>Bullet Flight downloader (x64)</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#ffffff", borderRadius: '15px'}}>
        <h1>Download page for Bullet Flight!</h1>  
      </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
  <p>Bullet Flight Installer (x64)</p>
  <a href="Bullet Flight Installer (x64).zip" download> Download</a>
  </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
  <p>Bullet Flight raw files (not recommended for download)</p>
  <a href="BulletFlightRawFiles.zip" download> Download</a>
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
