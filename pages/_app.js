import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { CartProvider } from '@/hooks/use-shopping-cart';
import { Header, Footer } from '@/components/index';
import { Toaster } from 'react-hot-toast';
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Head>
        <title>
          Rarest of pepes shop
        </title>
        <meta
          name="description"
          content="Bruh"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Script 
        src={`https://www.googletagmanager.com/gtag/js?id=G-43GWDJQ25E`}
        strategy="lazyOnload"
      />
      
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-43GWDJQ25E');
        `}
      </Script>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Component {...pageProps} />
          </main>
          <Footer />
        </div>
      </CartProvider>
      <Toaster />
    </>
  );
}

export default MyApp;
