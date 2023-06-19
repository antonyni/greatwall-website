import Head from 'next/head';
import Featured from "../components/Featured";

 
export default function Home() {
  return (
    <>
      <Head>
        <title>Great Wall Chinese Restaurant</title>
        <meta name="description" content="Authentic Chinese takeout located in Wilmington, DE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      
    </>
  )
}

