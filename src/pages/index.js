import React from 'react';
import RootLayout from '../components/Layouts/RootLayout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Next Home Page</title>
        <meta name='home page' description='this page is create by next js'></meta>
      </Head>
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;


HomePage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}