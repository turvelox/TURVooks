import '../styles/globals.css'
import React, {useState, useEffect} from 'react'


export default function MyApp({ Component, pageProps }) {

  return (
      <Component {...pageProps} />
  );
}
