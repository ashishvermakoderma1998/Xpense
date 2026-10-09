import React from "react";


const Features = () => {
  return (
    <>
      <section>
        <div className=" mt-5 grid grid-cols-[2fr_1fr]">
          <div className="px-45">
            <h1 className="  text-7xl font-bold">The Product we work with.</h1>
          </div>
          <div className="mr-7 pr-5">
            <p className="opacity-70 pt-7 text-xl">
              Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim
              aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget
              ut.
            </p>
          </div>
        </div>

        <div className="flex mt-25 justify-around ml-10 mr-10  ">
            <div >
                <img className="ml-35" src="/src/assets/ic_outline-phonelink.png" alt="" />
                <h2 className="text-center text-3xl font-semibold">Cross platform</h2>
                <p className="opacity-60 ">Elit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div >
                <img className="ml-35" src="/src/assets/ic_baseline-cloud-queue.png" alt="cloude" />
                <h2 className="text-center text-3xl font-semibold">Cloud server</h2>
                <p className="opacity-60">Elit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <div> 
                <img className="ml-35" src="/src/assets/ic_outline-backpack.png" alt="JavaScript" />
                <h2 className="text-center text-3xl font-semibold">Pure Javascript</h2>
                <p className="opacity-60  ">Elit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default Features;
