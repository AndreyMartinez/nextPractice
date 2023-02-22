import React, {FC, ReactNode} from 'react';
import Navbar  from '../Navbar/Navbar';
import Head from 'next/head';

type MainLayoutType = {
  children: ReactNode,
  titleHead:string
}
const MainLayout:FC<MainLayoutType> = ({ children, titleHead }) => (
  <>
    <Head>
      <title>{titleHead}</title>
    </Head>
    <main>
      <div>
        <Navbar />
      </div>
      {children}
    </main>
  </>
)

export default MainLayout;
