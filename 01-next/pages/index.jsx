import Head from 'next/head';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      <Head>
        <title>Hello Rapha</title>
      </Head>
      <Navbar actualPage="home" />
      <div>Welcome to Next.js!</div>
    </>
  )
}

export default HomePage
