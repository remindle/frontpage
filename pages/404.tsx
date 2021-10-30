import Link from '../components/link';

export default function Home() {
  return (
    <>
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="mb-16 text-center">
            <span className="text-xs font-semibold text-gray-500 uppercase">404</span>
            <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">Page not found</h2>
            <p className="mb-12 text-xl text-gray-500">Sorry! We are unable to find the page you are looking for</p>
            <div className="flex flex-wrap justify-center">
              <Link href="/">
                <a className="w-full md:w-auto px-8 py-4 mb-4 md:mb-0 md:mr-4 text-sm text-white font-medium leading-normal bg-primary hover:bg-secondary rounded transition duration-200">Go back to Homepage</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
