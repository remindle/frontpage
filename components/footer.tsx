import { Email } from 'react-obfuscate-email';

import Link from './link';
import Logo from './logo';

type Props = {
  //
}

const Footer = ({ }: Props) => {
  return (
    <footer className="py-8 pt-20">
      <div className="container mx-auto px-4 mb-5 md:mb-20">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
            <Logo/>
            <p className="mt-6 mb-6 max-w-sm text-base text-gray-500">Remember everything you want, by the means you prefer, in the frequency you like</p>
            <div className="flex">
              <Link className="flex justify-center items-center w-10 h-10 mr-4 bg-light rounded-full" href="https://github.com/remindle">
                <img className="fill-current text-tetriary" src="socials/github.svg" />
              </Link>
              <Link className="flex justify-center items-center w-10 h-10 bg-light rounded-full" href="https://www.linkedin.com/company/remindle">
                <img className="fill-current text-tetriary" src="socials/linkedin.svg" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-2/3 px-4">
            <div className="flex flex-wrap justify-between -mx-4">
              {/* <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Company</h3>
                <ul className="text-sm">
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="#">About Us</Link></li>
                  <li><Link className="text-gray-500 hover:text-gray-600" href="#">Blog</Link></li>
                </ul>
              </div> */}
              <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Pages</h3>
                <ul className="text-sm">
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="/blog">Blog</Link></li>
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="/login">Login</Link></li>
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="/register">Register</Link></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Legal</h3>
                <ul className="text-sm">
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="/terms">Terms</Link></li>
                  <li><Link className="text-gray-500 hover:text-gray-600" href="/privacy">Privacy</Link></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 px-4">
                <h3 className="mb-6 text-base font-medium">Resources</h3>
                <ul className="text-sm">
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="https://docs.remindle.io">Docs</Link></li>
                  <li className="mb-4"><Link className="text-gray-500 hover:text-gray-600" href="https://rds.remindle.io">Design System</Link></li>
                </ul>
              </div>
              <div className="w-1/2 lg:w-1/4 px-4 mb-8 lg:mb-0">
                <h3 className="mb-6 text-base font-medium">Contact us</h3>
                <ul className="text-sm">
                  <li className="mb-6">
                    <p className="mb-4">Email</p>
                    <Email className="underline text-gray-500 hover:text-gray-600" email="hello@remindle.io"/>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-gray-500 pt-8 px-4 border-t">All rights reserved © Remindle { new Date().getFullYear() }</p>
    </footer>
  )
}

export default Footer