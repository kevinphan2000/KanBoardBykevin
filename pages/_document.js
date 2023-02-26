import Document, { Html, Main, NextScript, Head } from 'next/document'
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin  />
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@600;700&family=Inter:wght@400;500;600;700&family=Poppins:wght@700;900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}
