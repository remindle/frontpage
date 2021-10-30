import { Button } from '@remindle/design-system';

type Props = {
  //
}

const Header = ({ }: Props) => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="hidden lg:block absolute bottom-0 right-0">
        <img className="w-full mr-40 -mb-40 opacity-90" src="backgrounds/secondary-circle-fade.svg" alt="circle"/>
        <img className="w-72 ml-auto opacity-30" src="backgrounds/primary-blob.svg" alt="blob"/>
      </div>
      <div className="relative container px-4 mx-auto">
        <div className="relative flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-2/3 px-4 mb-12 lg:mb-0">
            <div className="max-w-lg"><span className="text-xs text-tetriary-light font-semibold">Wherever your mind goes</span>
              <h2 className="mt-8 mb-6 lg:mb-10 lg:pr-2 text-4xl font-bold font-heading">Remember everything you want, by the means you prefer, in the frequency you like</h2>
              <p className="mb-6 lg:mb-12 text-xl text-gray-500">Remindle is a platform which helps you to remember all important events. You can set the means you’d like to receive the notifications and adjust the frequency according to importance levels.</p>
              <Button href="/register">Join our community</Button>
            </div>
          </div>
          {/* <div className="w-full lg:w-1/2 px-4"><img className="rounded-xl lg:max-w-2xl" src="https://fakeimg.pl/675x500/ff0000,10" alt=""/></div> */}
        </div>
      </div>
    </section>
  )
}

export default Header