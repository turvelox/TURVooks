import Head from 'next/head'

export default function Seo({ title }) {
  return (
    <Head>
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>TURVooks | {title}</title>
        <meta name="description" content="내가 읽은 책을 공유하는, 가장 빠른 방법!" />
        <meta name="keywords" content="TURVooks, turvooks, 터북스" />
        <meta name="author" content="TURVelop" />
    </Head>
  );
}
