"use client";

export const Hero = () => {
  return (
    <>
      <div className="h-full w-1/2 bg-[#E6E6E6] bg-cover  bg-right-top bg-no-repeat absolute right-0 top-0 z-10"></div>

      <main className="h-[90vh] w-full ">
        <span className="absolute z-40 top-1/4 left-[15%] text-7xl font-monument font-bold text-primary">
          The
        </span>
        <h1 className="absolute z-40 h-auto w-full top-[35%] flex items-center justify-center  left-0   text-11xl font-monument font-bold  ">
          <span className="text-primary ">RBM</span>
          <span className="bg-gradient-to-r from-[#E6E6E6] from-20% via-[#131212] to-[#131212] text-transparent bg-clip-text">
            P
          </span>
          <span className="text-secondary">SNIR</span>
        </h1>
        <h2 className="absolute z-40 top-2/3 left-[60%] text-7xl text-secondary font-monument font-bold">
          V2.0
        </h2>

        <div className="bg-red-500 h-12 w-1 bottom-0  absolute left-[calc(50%-2px)] z-40"></div>
        <p className="w-1/4 opacity-60 h-auto  text-lg text-primary font-montserrat z-40 absolute bottom-12">
          We are Yorkshire Based Design Agency. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Elementum felis, sed ullamcorper tempus
          faucibus in imperdiet. Semper justo mauris sed fusce erat aenean
          tristique.
        </p>

      </main>
    </>
  );
};
