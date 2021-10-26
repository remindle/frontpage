import CallToAction from '../components/callToAction';
import Features from '../components/features';
import Footer from '../components/footer';
import Header from '../components/header';
import Meta from '../components/meta';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <body className="antialiased bg-body text-body font-body">
      <Meta />
      <Navigation />

      <main>
        <Header />
        <Features />
        <CallToAction />
      </main>

      <Footer />
    </body>
  )
}
