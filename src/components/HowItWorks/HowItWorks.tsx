import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-black md:w-3/4 text-white p-10 rounded-2xl flex flex-col items-center space-y-8 border border-white mx-5">
      <div className="text-center">
        <div className="bg-gray-800 text-xs inline-block px-4 py-1 rounded-full mb-4">
          How it works
        </div>
        <h1 className="text-4xl font-bold">Supafast, Supaeasy.</h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8">
        <div className="text-center">
          <div className="text-9xl font-bold text-gray-800 mb-4">1</div>
          <h2 className="text-2xl font-bold">Subscribe</h2>
          <p className="text-gray-400">
            Pick a subscription and you’ll receive an invite to your own private
            Slack channel.
          </p>
          <p className="text-gray-400 mt-4">
            Payment securely done via{" "}
            <span className="text-blue-500">Stripe</span>
          </p>
        </div>
        <div className="text-center">
          <div className="text-9xl font-bold text-gray-800 mb-4">2</div>
          <h2 className="text-2xl font-bold">Request</h2>
          <p className="text-gray-400">
            Submit as many design requests as you want. We’ll focus on one
            request at a time.
          </p>
          <p className="text-gray-400 mt-4">
            Communication done via <span className="text-blue-500">Slack</span>
          </p>
        </div>
        <div className="text-center">
          <div className="text-9xl font-bold text-gray-800 mb-4">3</div>
          <h2 className="text-2xl font-bold">Receive</h2>
          <p className="text-gray-400">
            Expect your designs in 2-3 business days. We’ll also make as many
            revisions as you need.
          </p>
          <p className="text-gray-400 mt-4">
            Delivered in <span className="text-blue-500">Figma</span> or{" "}
            <span className="text-blue-500">Framer</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
