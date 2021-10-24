import Head from 'next/head';

import { PRODUCT_DESCRIPTION, PRODUCT_NAME, THEME_COLOR } from '../shared/constants';

type Props = {
  title?: string
}

const Meta = ({ title }: Props) => {
  return (
    <Head>
      { title ? <title>{PRODUCT_NAME} - {title}</title> : <title>{PRODUCT_NAME}</title> }
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description" content={PRODUCT_DESCRIPTION}/>
      <meta name="author" content="Leo van Haaren"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" data-crossorigin />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400|Sen:400,700|DM+Sans:300,500,700&amp;subset=latin"/>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#062C80" />
      <meta name="theme-color" content={THEME_COLOR} />
    </Head>
  )
}

export default Meta