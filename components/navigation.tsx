import Link from 'next/link';

import Logo from './logo';

type Props = {
  //
}

const Navigation = ({ }: Props) => {
  return (
    <nav className="py-8">
      <div className="container px-4 mx-auto">
        <nav className="relative">
          <div className="flex justify-between items-center">
            <Logo/>
            <div className="lg:hidden">
              <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 rounded">
                <svg className="block h-4 w-4" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
            <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:w-auto lg:space-x-12">
              <li>
                <Link href="about">
                  <a className="text-sm font-medium">About</a>
                </Link>
              </li>
              <li>
                <Link href="https://docs.remindle.io">
                  <a className="text-sm font-medium">Docs</a>
                </Link>
                </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/login">
                <a className="inline-block mr-2 py-3 px-8 text-sm leading-normal rounded border font-medium">Log in</a>
              </Link>
              <Link href="/register">
                <a className="inline-block py-3 px-8 text-sm text-white font-medium leading-normal bg-primary hover:bg-secondary rounded transition duration-200">Sign Up</a>
              </Link>
              </div>
          </div>
        </nav>
      </div>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8"><a className="mr-auto text-2xl font-medium leading-none" href="#"><img className="h-7" src="zeus-assets/logo/logo-zeus-red.svg" alt="" width="auto"/></a>
            <button className="navbar-close">
              <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="https://remindle.io/about">About</a></li>
              <li className="mb-1"><a className="block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded" href="https://docs.remindle.io">Docs</a></li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6"><a className="block mb-2 py-3 text-sm text-center leading-normal rounded border font-medium" href="https://remindle.io/login">Log in</a><a className="block py-3 text-sm text-center text-white leading-normal rounded bg-primary hover:bg-secondary  font-medium transition duration-200" href="#">Sign Up</a></div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-500"><span>© 2021 All rights reserved.</span></p>
          </div>
        </nav>
      </div>
    </nav>
  )
}

export default Navigation