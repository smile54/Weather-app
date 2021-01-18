import React from 'react';
import Head from 'next/head';
import { CurrentCity } from '../src';

export default function Home() {
  const faviconUrl = process.env.NODE_ENV === 'production' ? '/Weather_app/favicon.ico' : '/favicon.ico';
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href={faviconUrl} />
      </Head>

      <main className="grid grid--container">
        <CurrentCity />
      </main>
    </>
  );
}
