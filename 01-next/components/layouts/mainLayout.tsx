import React, {FC, ReactNode} from 'react';
import Navbar  from '../Navbar/Navbar';
import Head from 'next/head';

interface Props {
  children: ReactNode,
  titleHead:string
}
const MainLayout:FC<Props> = ({ children, titleHead }) => (
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
