import React from 'react';
import Head from 'next/head';

const path = 'https://raw.githubusercontent.com/gabyfutemma/poefanquiz/main/public';

function IndexPage({
  title, imgBg, favicon, description,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={favicon} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://poefanquiz.gabyfutemma.vercel.app/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={path + imgBg} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://poefanquiz.gabyfutemma.vercel.app/" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={path + imgBg} />
      </Head>
    </div>
  );
}

export default IndexPage;
