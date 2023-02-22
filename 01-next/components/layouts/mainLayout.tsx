import React from 'react';
import Navbar  from '../Navbar/Navbar';
import Head from 'next/head';

const MainLayout = ({ children, titleHead }) => (
  <>
    <Head>
      <title>{titleHead}</title>
    </Head>
    <Navbar />
    <main>
      {children}
    </main>
  </>
)

export default MainLayout;
