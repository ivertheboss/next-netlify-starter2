import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <html>
<head>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
</head>
<body>

<h2>Hoverable Dropdown</h2>
<p>Move the mouse over the text below to open the dropdown content.</p>

<div class="dropdown">
  <span>Mouse over me</span>
  <div class="dropdown-content">
  <p>Hello World!</p>
  </div>
</div>

</body>
</html>
    <html>
      <head>
        <title>Python files</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22></text>🐍</svg>"></link>
      </head> 
      <body>
        <h1>Python Programs for windows</h1>
        <p>Bulletin Board program</p>
        <a href="BulletinBoard.zip" download> Download</a>
        <p>Tick-tack-toe</p>
        <a href="tick-tack-toe" download> Download</a>
      </body>
      <div>
        <h1>Python game rescorces</h1>
        <div class="dropdown">
          <span>More info</span>
          <div class="dropdown-content">
            <p>These files are package installers</p>
            <p>Most games require them</p>
          </div>
        </div>
        <p>Pygame/ installer</p>
        <a href="tick-tack-toe" download> Download</a>
      </div>
    </html>
  )
}
