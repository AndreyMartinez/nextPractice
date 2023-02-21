import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div>
        <h1>Contact</h1>
        <Link href={"/"}>
          Home
        </Link>
      </div>
    </>
  )
}
