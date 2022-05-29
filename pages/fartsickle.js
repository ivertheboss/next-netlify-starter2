import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html style={{backgroundColor: "#6872b3"}}>
      <head>
        <title>Grayson George's page</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤥</text></svg>"></link>
      </head> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '35vh', backgroundColor: "#0059ff", borderRadius: '15px'}}>
        <h1>Quandale dingle here (page requested by Grayson George)</h1>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}></div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <iframe width="1189" height="669" src="https://www.youtube.com/embed/fwJo7K-aYEQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <iframe width="1189" height="669" src="https://www.youtube.com/embed/3YHM768tt0c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <iframe width="1189" height="669" src="https://www.youtube.com/embed/DdWC239Dbps" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <iframe width="1189" height="669" src="https://www.youtube.com/embed/xl7y2mMMLD8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
<div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
        <iframe width="1189" height="669" src="https://www.youtube.com/embed/myL7rMj7Zjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   </div>
   <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '18vh'}}>
    <p>Back to home</p>
    <a href="http://www.thecoldlemonade.xyz/">
    <input type="button" value="Home" />
    </a>
   </div>
  </html>
  )
}
