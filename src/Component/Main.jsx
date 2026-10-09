import React from "react";

const Main = () => {
  return (
    <>
      <section>
      <div className="grid grid-cols-2 ">
        <div className="px-25">
          <h1 className="text-7xl font-bold ">
            Track your Expenses to Save Money
          </h1>
          <p className="py-10 opacity-80">
            Helps you to organize your income and expenses
          </p>
          <button className="bg-orange-600 rounded-xl p-2">
            Try free demo
          </button>
          <span className="py-5 opacity-80">— Web, iOs and Android</span>
        </div>
        <div>
          <img src="/src/assets/Illustration (1).png" alt="Banner" />
        </div>
      </div>
      </section>
      

      {/* {second page} */}
      <section>
       <div>
        <div className="bg-orange-500 relative m-0 w-[1440px] h-[712px]">
          <img
            className="w-[1110] h-[625] absolute bottom-0 left-36 z-10"
            src="/src/assets/Image.png"
            alt="image"
          />
          <img
            className="absolute bottom-0 left-0"
            src="/src/assets/Vector (1).png"
            alt="v1"
          />
          <img
            className="absolute top-0 right-0 "
            src="/src/assets/Vector.png"
            alt="v2"
          />
        </div>
        <div className="flex justify-between mt-6 ml-25 mr-25 mb-16">
          <img  src="/src/assets/image 1.png" alt="" />
          <img className="w-[140px] h-[32px]" src="/src/assets/image 2.png" alt="" />
          <img className="w-[140px] h-[32px]" src="/src/assets/image 3.png" alt="" />
          <img className="w-[140px] h-[32px]" src="/src/assets/image 4.png" alt="" />
          <img className="w-[140px] h-[32px]" src="/src/assets/Image 5.png" alt="" />
        </div>
      </div>
      </section>
      
     

      {/* {third page} */}
      <section>
        <div className="grid grid-cols-2 mt-5">
        <div className="px-25">
          <p className="opacity-80">ALWAYS ONLINE</p>
          <h1 className="text-7xl font-bold">Real-time support with cloud</h1>
          <p className="py-10 opacity-80">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
          <a className="text-orange-600" href="">learn More-</a>
        </div>
        <div>
          <img src="/src/assets/Illustrator.png" alt="illustrator" />
        </div>
      </div>
      </section>

      {/* {fourth page} */}
      <section>
        <div className="grid grid-cols-2 mt-25">
          <div className="px-15"> 
          <img className="py-3 w-[540px] h-[431px]" src="/src/assets/Illustrator3.png" alt="illustrator" />
        </div>
        <div >
          <p className="opacity-80 mt-20">free some cost</p>
          <h1 className="text-7xl font-bold">Save cost for you and family</h1>
          <p className="py-7 opacity-80">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
          <a className="text-orange-600" href="">learn More-</a>
        </div>
        
      </div>
      </section>

      {/* Five page */}
      <section>
          <div className="grid grid-cols-2 mt-25">
        <div className="px-25">
          <p className="opacity-80">Use anytime</p>
          <h1 className="text-7xl font-bold">Use anytime when you need</h1>
          <p className="py-10 opacity-80">Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.</p>
          <a className="text-orange-600" href="">learn More-</a>
        </div>
        <div>
          <img src="/src/assets/illustration4.png" alt="illustrator" />
        </div>
      </div>
      </section>


      
    </>
  );
};

export default Main;
