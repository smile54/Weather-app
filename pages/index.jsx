import React from 'react';
import Head from 'next/head';
import { CurrentCity } from '../src';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid grid--container">
        <CurrentCity />
      </main>
    </>
  );
}
