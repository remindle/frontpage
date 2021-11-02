import CallToAction from '../components/callToAction';
import Features from '../components/features';
import Header from '../components/header';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-grow justify-center">
        <Header />
        <Features />
        <CallToAction />
      </main>
    </>
  )
}
