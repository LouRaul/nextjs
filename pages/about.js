import Head from 'next/head'
import React from 'react';
import Nav from '../src/Nav'




export default function Home() {
  return (
    <div>
      <Head>
        <title>CAL Compass
        </title>
        <meta name="viewport"content="minimum-scale=1, initial-scale=1, width=device-width"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
 
        
        <h1>About</h1>
       </div>

  )
}
