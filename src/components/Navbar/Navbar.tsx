"use client"
// components/Navbar.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://ahzbackend.onrender.com//api/bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phoneNumber: "" });
        setIsFormOpen(false);
      } else {
        console.error("Failed to submit booking");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <>
      <div className="bg-white text-black md:w-2/4 w-11/12 md:mx-2 mx-5 rounded-2xl flex border border-black justify-between items-center px-5 py-2 bottom-6 md:inset-x-1/4 inset-x-auto fixed z-10">
        <div className="flex items-center space-x-4">
          <Image src="/image2.jpg" alt="Logo" width={30} height={30} />
          <Link
            className="hover:underline hidden md:inline-block "
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="hover:underline hidden md:inline-block "
            href="/work"
          >
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
        <button
          onClick={handleOpenForm}
          className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
        >
          Book a call with Harsh
        </button>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-80 relative">
            <button
              onClick={handleCloseForm}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-xl font-semibold mb-4 text-black">Book a Call</h2>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-black">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-md w-full p-2 mt-1 text-black"
                />
              </label>
              <label className="block mb-2 text-black">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-md w-full p-2 mt-1 text-black"
                />
              </label>
              <label className="block mb-4 text-black">
                Phone Number:
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="border rounded-md w-full p-2 mt-1 text-black"
                />
              </label>
              <button
                type="submit"
                className="bg-black text-white rounded-full px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
