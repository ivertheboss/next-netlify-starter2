import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#6872b3"}}>
      <head>
        <title>TheColdLemonade's website</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👌</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Welcome to TheColdLemonade's <u>wonderfull</u> website!</h1>  
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
        <p>This is the link the to python page. It contains most of my python projects. It my custom package downloaders. (only for windows x64)
</p>
    <a href="http://www.thecoldlemonade.xyz/python/">
    <input type="button" value="Python page" />
    </a>  
    <p>Do you want your own page on my site? Go to the page and fill out the form.</p>
    <a href="http://www.thecoldlemonade.xyz/customPage/">
    <input type="button" value="Form page" />
   
   </div>
  </html>
  )
}
