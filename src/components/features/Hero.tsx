"use client";

export const Hero = () => {
  return (
    <>
      <div className="h-[100vh] w-1/2  bg-[#e6e6e6] bg-cover bg-right-top bg-no-repeat absolute right-0 top-0 z-10"></div>
      <div className="h-[100vh] w-1/2  bg-primary bg-cover bg-right-top bg-no-repeat absolute left-0 top-0 z-10"></div>

      <main className="h-[90vh] w-full relative max-w-9xl mx-auto">
        <span className="absolute  z-40 top-1/4 left-[15%] lg:text-7xl text-4xl font-monument font-bold text-primary">
          The
        </span>
        <h1 className="absolute  z-40 h-auto w-full top-[35%] flex items-center justify-center  left-0  lg:text-11xl md:text-7xl text-5xl font-monument font-bold  ">
          <span className="text-primary ">RBM</span>
          <span className="bg-gradient-to-r from-[#E6E6E6] from-20% via-[#131212] to-[#131212] text-transparent bg-clip-text">
            P
          </span>
          <span className="text-secondary">SNIR</span>
        </h1>
        <h2 className="absolute z-40 md:top-2/3 top-1/2 left-[60%] lg:text-7xl text-4xl text-secondary font-monument font-bold">
          V2.0
        </h2>

        <p className="md:w-1/4 w-2/4 opacity-60 h-auto text-lg text-primary font-montserrat z-40 absolute lg:bottom-36 bottom-5 left-2 lg:left-0">
          The best weather application for informing paragliders about the
          weather conditions at the best spots in the world!
        </p>
        <div className="absolute bottom-5 left-[calc(50%-22px)] z-40 rotate-45">
          <button className="h-10 w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="h-10 w-10 "
            >
              <path
                d="M83.1 79.3 37.7 33.8 34 37.6l45.4 45.5H45.1v5.4h43.4V45h-5.4v34.3zm26.1-60.6c-24.9-25-65.4-25-90.3 0-24.9 25-24.9 65.5 0 90.5s65.4 25 90.3 0c25-24.9 25-65.5 0-90.5zm-3.7 86.8c-22.9 22.9-59.9 22.9-82.8 0s-22.9-60.1 0-83 59.9-22.9 82.8 0c22.8 22.9 22.8 60.1 0 83z"
                fill="#0A0A0A"
              />
            </svg>
          </button>
        </div>
      </main>
    </>
  );
};
