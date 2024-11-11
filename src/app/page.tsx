
import Home from "@/components/Home";

import Navbar from "@/components/Navbar/Navbar";
import Pricing from "@/components/Pricing/Pricing";
import Scroller from "@/components/Scroller/Scroller";
import ServicesSection from "@/components/ServiceSection/ServiceSection";
import SmashButton from "@/components/SmashButton/SmashButton";
import TrafficConversionChallenge from "@/components/TrafficConversion/TrafficConversion";
import React from "react";

const Page = () => {
  const images = [
    { src: "ghxkdrtVlTYVs5TqQVRUufskSE.avif", title: "Title 1" },
    { src: "P9tbhyvJqs5tqYUWjMPQnApXBe0.avif", title: "Title 2" },
    { src: "ghxkdrtVlTYVs5TqQVRUufskSE.avif", title: "Title 3" },
    { src: "P9tbhyvJqs5tqYUWjMPQnApXBe0.avif", title: "Title 4" },
    { src: "ghxkdrtVlTYVs5TqQVRUufskSE.avif", title: "Title 5" },
    { src: "P9tbhyvJqs5tqYUWjMPQnApXBe0.avif", title: "Title 6" },
    { src: "ghxkdrtVlTYVs5TqQVRUufskSE.avif", title: "Title 7" },
    { src: "P9tbhyvJqs5tqYUWjMPQnApXBe0.avif", title: "Title 8" },
  ];

  return (
    <div>
      <Navbar/>
      <Home />
      <div className="py-5 bg-black">
        <div className="scroll-container">
          <div className="scroll-inner">
            {images.map((img, index) => (
              <div className="scroll-item" key={index}>
                <Scroller image={img.src} title={img.title} />
              </div>
            ))}
            {/* Duplicate the images to create a seamless loop */}
            {images.map((img, index) => (
              <div className="scroll-item" key={`duplicate-${index}`}>
                <Scroller image={img.src} title={img.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TrafficConversionChallenge />
      <div className=" flex items-center justify-center bg-black">
        {/* <ConversionDesign /> */}
      </div>

      <div className="flex items-center justify-center bg-black">
        <ServicesSection />
      </div>


      {/* Companies scroller */}
      {/* <div className="relative w-full overflow-hidden" style={{ width: "90%" }}>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-flex gap-20 text-2xl mt-6">
            <div>Hansa</div>
            <div>11x</div>
            <div>Hansa</div>
            <div>Combinator</div>
            <div>11x</div>
            <div>Hansa</div>
            <div>Hansa</div>
            <div>Combinator</div>
            <div>Hansa</div>
            <div>11x</div>
            <div>Hansa</div>
            <div>Hansa</div>
          </div>
        </div>
      </div> */}

      <div className="flex items-center justify-center bg-black">
        {/* <HowItWorks /> */}
      </div>
      <div className=" flex items-center justify-center bg-black" >
        <Pricing />
      </div>
      <SmashButton/>
    </div>
  );
};

export default Page;
