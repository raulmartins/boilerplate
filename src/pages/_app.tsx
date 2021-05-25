// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado - Nextjs - Boilerplate</title>
        <link rel="shortcut icon" type="image/x-icon" href="/img/favico.ico" />
        <link rel="apple-touch-icon" href="/img/favico.ico" />
        <meta
          name="description"
          content="A Simple project starter to work with TypeScript and NextJS"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
