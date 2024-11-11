// components/Navbar.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div className="bg-white text-black md:w-2/4 w-11/12 md:mx-2 mx-5 rounded-2xl flex border border-black  justify-between items-center px-5 py-2 bottom-6 md:inset-x-1/4 inset-x-auto fixed z-10">
      <div className="flex items-center space-x-4">
        <Image src="/image2.jpg" alt="Logo" width={30} height={30} />
        <Link
          className="hover:underline hidden md:inline-block "
          href="/pricing"
        >
          Pricing
        </Link>
        <Link className="hover:underline hidden md:inline-block " href="/work">
          Work
        </Link>
        <Link
          className="hover:underline hidden md:inline-block "
          href="/how-it-works"
        >
          How it works
        </Link>
        <Link className="hover:underline hidden md:inline-block " href="/faq">
          FAQ
        </Link>
      </div>
      <Link
        href="/book-call"
        className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
      >
        Book a call with Harsh
      </Link>
    </div>
  );
};

export default Navbar;
