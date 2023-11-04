"use server";

const page = async () => {
  return (
    <>
      {/* <div className="w-full max-w-9xl mx-auto py-4">
        <h1 className="text-lg absolute top-[10vh] font-semibold italic text-secondary font-montserrat">
          Home / Beacons / Mont des cats
        </h1>
      </div> */}
      <div className="h-[90vh] w-full pb-8">
        <div className="h-full w-full max-w-9xl mx-auto">
          <div className="grid grid-cols-3 grid-rows-2  h-full w-full gap-8 ">
            <div className="grid grid-cols-2 grid-rows-2 h-full w-full gap-8 ">
              <div className="h-full w-full bg-primary rounded-3xl shadow-lg shadow-black"></div>
              <div className="h-full w-full  bg-primary rounded-3xl shadow-lg shadow-black"></div>
              <div className="h-full w-full  bg-primary rounded-3xl shadow-lg shadow-black"></div>
              <div className="h-full w-full  bg-primary rounded-3xl shadow-lg shadow-black"></div>
            </div>
            <div className=" col-span-2 h-auto bg-primary rounded-3xl shadow-lg shadow-black">
              htrehrt
            </div>
            <div className=" col-span-3 h-auto bg-primary rounded-3xl shadow-lg shadow-black">
              htrehrt
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
