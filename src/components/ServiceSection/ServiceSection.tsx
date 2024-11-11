import React from "react";

const services = [
  "Copywriting",
  "Branding",
  "Logos & Icons",
  "Landing pages",
  "Creative strategy",
  "Websites",
  "Custom Illustrations/Graphics",
  "Web Apps",
  "Mobile Apps",
  "Pitch decks",
  "Social media assets",
  "Email templates",
  "CMS",
  "Framer/Webflow/React Development",
];

const ServicesSection: React.FC = () => {
  return (
    <div  className="md:w-3/4 w-5/6">
       
      <div className="bg-black text-white p-10 rounded-lg">
        <div className="text-center mb-6">
          <div className="bg-gray-800 text-xs inline-block px-4 py-3 rounded-full mb-4">
            Services
          </div>
          {/* <div className="flex flex-col gap-5">
            <h1 className="md:text-5xl text-3xl font-bold leading-14">You name it, we</h1>
            <h1 className="md:text-5xl text-3xl font-bold leading-14">ship it supafast.</h1>
          </div> */}
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black text-sm px-4 py-2 rounded-full border border-gray-600"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default ServicesSection;
