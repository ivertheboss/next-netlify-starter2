import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#c6c6c6"}}>
      <head>
        <title>TheColdLemonade's website</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👌</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> website!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
        <p>This is the link the to python page. It contains most of my python projects. It has my custom package downloaders. (only for windows x64)
</p>
    <a href="http://www.thecoldlemonade.xyz/python/">
    <input type="button" value="Python page" />
    </a>
   </div>
   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
      <p>Do you want your own page on my site? Go to the page and fill out the form.</p>
    <a href="http://www.thecoldlemonade.xyz/customPage/">
    <input type="button" value="Form page" />
    </a>
   </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
      <p>This is the PI page. It has the first 1 million digits of PI.</p>
    <a href="http://www.thecoldlemonade.xyz/pi/">
    <input type="button" value="PI page" />
    </a>
   </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> custom pages!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '9vh'}}>
        <p>This is Grayson George's page. Description: "wassup guys quandill dingle here and I just ate ur mum." 
</p>
    <a href="http://www.thecoldlemonade.xyz/fartsickle/">
    <input type="button" value="Page" />
    </a>
   </div>
  </html>
  )
}
