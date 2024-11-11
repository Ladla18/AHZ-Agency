import React from "react";

const Pricing = () => {
  return (
    <div
      className="container bg-white py-5 mt-10 md:w-3/4 w-11/12 flex flex-col items-center rounded-2xl px-4 md:px-0"
      
    >
      <h3 className="bg-black rounded-xl text-white w-20 h-6 text-center mt-10">
        Pricing
      </h3>
      <h1 className="text-black  text-3xl md:text-5xl font-bold mt-10 text-center">
        Ready to Superfast
      </h1>
      <h1 className="text-black  text-3xl md:text-5xl font-bold mt-3 text-center">
        your conversions?
      </h1>
      <div className="md:8/12">
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          <div className="text-black border border-black py-10 px-5 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="bg-slate-300 rounded-2xl px-3 py-1 text-black mb-3 md:mb-0">
                One Off
              </p>
              <p className="bg-red-200 rounded-2xl px-3 py-1 ms-2 text-red-800">
                Fully Booked Until September
              </p>
            </div>
            <h2 className="font-bold text-3xl mt-7">$2,497</h2>
            <p className="text-gray-400">Launch your dream site in 5 days!</p>
            <h4 className="mt-4">
              Perfect for a single, high-impact, conversion-focused landing
              page.
            </h4>
            <div className="flex flex-col border border-black rounded-xl p-4 mt-4">
              <div className="flex gap-5 items-center">
                <img
                  src="/image2.jpg"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="Chrys Bader"
                />
                <div>
                  <h1>Chrys Bader</h1>
                  <h3>CO-founder & CEO at Rosebud</h3>
                </div>
              </div>
              <div className="mt-4">
                <h3>Excellent, patient, professional, quick</h3>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-black text-white py-2 px-4 rounded-lg w-full md:w-full">
                Secure your September Spot
              </button>
            </div>
            <div className="mt-4">
              <h1>Features:</h1>
              <ul className="list-disc ml-5 mt-2">
                <li>2x Revision</li>
                <li>Branding</li>
                <li>Landing Page Design</li>
                <li>Async + Slack + Loom</li>
                <li>Updates every 48 hours</li>
                <li>Copywriting</li>
                <li>Development</li>
              </ul>
            </div>
          </div>
          <div className="text-white bg-black rounded-xl py-10 px-5">
            <div className="flex flex-col  md:flex-row items-center justify-between">
              <p className="bg-slate-900 rounded-2xl px-2 py-1 h-7 text-center mb-3 md:mb-0">
                Retainer
              </p>
              <div className="flex gap-5 border rounded-3xl px-2 py-2">
                <button className="bg-white text-black rounded-2xl px-2 py-1">
                  Standard
                </button>
                <button>Growth</button>
              </div>
            </div>
            <h2 className="font-bold text-3xl mt-3">$2,497</h2>
            <p className="text-gray-400">Launch your dream site in 5 days!</p>
            <h4 className="mt-4">
              Perfect for a single, high-impact, conversion-focused landing
              page.
            </h4>
            <div className="flex flex-col border rounded-xl p-4 mt-4">
              <div className="flex gap-5 items-center">
                <img
                  src="/image2.jpg"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  alt="Chrys Bader"
                />
                <div>
                  <h1>Chrys Bader</h1>
                  <h3>CO-founder & CEO at Rosebud</h3>
                </div>
              </div>
              <div className="mt-4">
                <h3>Excellent, patient, professional, quick</h3>
              </div>
            </div>
            <div className="mt-4">
              <button className="bg-white text-black py-2 px-4 rounded-lg w-full md:w-full">
                Secure your September Spot
              </button>
            </div>
            <div className="mt-4">
              <h1>Features:</h1>
              <ul className="list-disc ml-5 mt-2">
                <li>2x Revision</li>
                <li>Branding</li>
                <li>Landing Page Design</li>
                <li>Async + Slack + Loom</li>
                <li>Updates every 48 hours</li>
                <li>Copywriting</li>
                <li>Development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
