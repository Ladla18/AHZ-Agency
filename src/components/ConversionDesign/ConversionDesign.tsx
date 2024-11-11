import React from "react";

const ConversionDesign: React.FC = () => {
  return (
    <div
      className="bg-black mt-5 text-white md:p-20 p-5 rounded-3xl border md:w-3/4"
      
    >
      <h1 className="md:text-5xl text-3xl font-bold mb-6 text-center">
        The solution: <span className="block">Conversion-focused design.</span>
      </h1>
      <p className="text-lg mb-10 text-gray-500 text-center">
        Designs that captivate, copy that resonates, and development that
        converts. <br /> Moving beyond surface metrics to emotional impact that
        turns browsers into buyers.
      </p>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="text-center">
          <div className="text-4xl mb-2">👍</div>
          <h2 className="font-semibold">Compelling Copy</h2>
          <p className="text-gray-500 ">
            Crafting words that engage, resonate, and ultimately convince your
            audience to take action.
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">💎</div>
          <h2 className="font-semibold">Top-Tier Branding</h2>
          <p className="text-gray-500 ">
            Design a brand identity to stand out in a crowded marketplace.
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-2">💲</div>
          <h2 className="font-semibold">Conversion-Focused Design</h2>
          <p className="text-gray-500 ">
            Creating visually appealing designs that are optimized for maximum
            conversion rates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversionDesign;
