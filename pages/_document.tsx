import Document, { Head, Html, Main, NextScript } from 'next/document';

import Footer from '../components/footer';
import Navigation from '../components/navigation';
import { PRODUCT_DESCRIPTION, PRODUCT_NAME, THEME_COLOR } from '../shared/constants';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>{PRODUCT_NAME}</title>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content={PRODUCT_DESCRIPTION}/>
          <meta name="author" content="Leo van Haaren"/>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400|Sen:400,700|DM+Sans:300,500,700&amp;subset=latin"/>
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#062C80" />
          <meta name="theme-color" content={THEME_COLOR} />
        </Head>
        <body className="h-screen flex flex-col justify-between antialiased bg-body text-body font-body">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;