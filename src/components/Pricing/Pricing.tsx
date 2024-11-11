import React from "react";

const Pricing = () => {
  return (
    <div className="container bg-white py-5 mt-10 md:w-3/4 w-11/12 flex flex-col items-center rounded-2xl px-4 md:px-0">
      <h3 className="bg-black rounded-xl text-white w-20 h-6 text-center mt-10">
        Pricing
      </h3>
      <h1 className="text-black  text-3xl md:text-5xl font-bold mt-10 text-center">
        Ready to Superfast
      </h1>
      <h1 className="text-black  text-3xl md:text-5xl font-bold mt-3 text-center">
        your conversions?
      </h1>
      <div className="md:10/12">
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          <div>
            <img className="rounded-xl"
              src="/WhatsApp Image 2024-11-11 at 23.35.48_cca4eb14.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
