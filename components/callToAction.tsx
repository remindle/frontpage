type Props = {
  //
}

const CallToAction = ({ }: Props) => {
  return (
    <section className="bg-tetriary py-20">
      <div className="container px-4 mx-auto">
        <h2 className="mb-8 md:mb-16 text-4xl lg:text-6xl font-semibold font-heading text-white">Stop forgetting to remember</h2>
        <div className="flex flex-wrap items-center">
          <div className="inline-block max-w-xl mb-6 md:mb-0">
            <p className="text-xl text-gray-300">Drop us a line, and we'll get in touch.</p>
            <p className="text-xl text-gray-300">'ll see if we're a match and how we can help each other.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction