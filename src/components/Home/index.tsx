"use client";
import { useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleButtonClick = () => {
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
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", phone: "" });
        setIsFormOpen(false);
      } else {
        console.error("Failed to submit booking");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="bg-black text-white h-screen flex flex-col items-center">
      <h2 className="mt-10 text-2xl font-bold mb-3">AHZ Agency</h2>

      <div className="p-2 mt-10 flex items-center justify-center text-white">
        <div className="flex items-center space-x-2">
          {/* Avatar Group */}
          <div className="flex -space-x-4">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="/image2.jpg"
              alt="Avatar 1"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="/image2.jpg"
              alt="Avatar 2"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="/image2.jpg"
              alt="Avatar 3"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="/image2.jpg"
              alt="Avatar 4"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="/image2.jpg"
              alt="Avatar 5"
            />
          </div>
          {/* Rating Stars */}
          <div>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.18c.972 0 1.371 1.24.588 1.81l-3.38 2.45a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.683-1.537 1.118l-3.38-2.45a1 1 0 00-1.176 0l-3.38 2.45c-.782.565-1.837-.197-1.537-1.118l1.286-3.971a1 1 0 00-.364-1.118l-3.38-2.45c-.783-.57-.384-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.971z" />
                </svg>
              ))}
            </div>
            <div className="text-sm">100+ Startup Founders Love AHZ Agency</div>
          </div>
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl mt-5 font-bold">Web Design that</h1>
      <h1 className="text-5xl md:text-7xl font-bold mt-5">doubles leads</h1>
      <p className="md:text-xl text-lg mt-6 text-center">
        Design, copy, and development engineered to
        <br />
        turn browsers into buyers and drive sales on autopilot.
      </p>
      <button
        onClick={handleButtonClick}
        className="mt-6 bg-white text-black px-10 py-5 shadow-lg rounded-2xl font-semibold"
      >
        Book a call with Harsh
      </button>
      <p className="text-sm mt-4">
        Fixed costs. No lock-ins. Clear deliverables.
      </p>

      {/* Popup Form Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg w-80 md:w-1/3">
            <h3 className="text-2xl font-bold text-center mb-4">Book a Call</h3>
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-black font-bold">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded text-black"
              />
              <label className="block mb-2 text-black font-bold">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded text-black"
              />
              <label className="block mb-2 text-black font-bold">Phone:</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded text-black"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-lg w-full"
              >
                Submit
              </button>
            </form>
            <button onClick={handleCloseForm} className="mt-4 text-gray-500">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
