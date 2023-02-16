import React from 'react'

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-white">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div className="relative px-4 mx-auto max-w-7xl sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 font sm:text-6xl">Create Fantasy onClick</h1>
          <p className="mt-4 text-xl text-gray-500">Connect With Anyone You Want To Meet</p>
        </div>
        <div>
          <div className="mt-10">
            <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 overflow-hidden rounded-lg w-44 sm:opacity-0 lg:opacity-100">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518661956-WSJF7JDRKHW612N66RQG/the-oscars.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518659766-JLYOO2JWUDIVHRRL8RVD/emmy-awards.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518660437-JD2AG1XGZAQSNUJH288F/grammy-awards.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518659024-GFQAWTQTSEXNWH2YGZI0/buffett.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518661557-VLLEZTFIOAF1MGW7O8R2/paris-fashion-week.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479518662457-YZTLTPU7JTIXPO7LEPGH/un-youth-camp.jpg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                    <div className="h-64 overflow-hidden rounded-lg w-44">
                      <img src="https://images.squarespace-cdn.com/content/v1/5824bcd6e6f2e1eac0b63ac0/1479662024114-1H9GRV0IU6YUVOJZ3A2H/8.jpeg?format=500w" alt="" className="object-cover object-center w-full h-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="/showfantasy" className="inline-block px-8 py-3 mx-2 font-medium text-center text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900">Show Fantasy</a>
            <a href="/createfantasy" className="inline-block px-8 py-3 font-medium text-center text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-900">Create Fantasy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home