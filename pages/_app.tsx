import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>pH da química</title>
                <meta name="description" content="Química pura e simples" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    property="og:title"
                    content="pH da química, química pura e simples"
                />
                <link
                    rel="shortcut icon"
                    href="public\LogoImage.png"
                    type="image/x-icon"
                />
                <meta name="theme-color" content="#1A48AF" />
                <meta property="og:image" content="public\LogoImage.png" />
                <meta
                    name="keywords"
                    content="Química, Enem, Vestibular, Prova, Enem 2022, Enem 2023"
                ></meta>
                <meta name="author" content="Lucca Paradeda"></meta>
                <link rel="parent" hrefLang="pt" />
                <link rel="icon" href="/logoImage.png" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
