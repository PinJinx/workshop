"use client";
import { useState } from "react";
import Image from "next/image";
export default function Login() {
  const [seatsNo, setSeastsNo] = useState(1);
  const changeSeats = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seats = parseInt(e.target.value);
    if (seats < 1) {
      setSeastsNo(1);
    } else {
      setSeastsNo(seats);
    }
  };
  return (
    <div className="min-h-screen bg-black px-4 py-10 text-white font-sans">
    <Image 
      alt="Background" 
      width={1200} 
      height={1200} 
      className="absolute z-0 left-0 top-0" 
      src="/bg1.png"
    />
    <Image 
      alt="Background" 
      width={1200} 
      height={1200} 
      className="absolute scale-y-[-1] z-0 bottom-0 right-0 pointer-events-none" 
      src="/bg2.png"
    />
      <form className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md">
            <div className="flex flex-col items-center space-y-8">
            <p className="text-3xl md:text-5xl font-Lalezar text-gray-200">
              Register
            </p>
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Admission Number"
              required
              pattern="[A-Za-z]{2}\.[A-Za-z]{2}\.[A-Za-z]{1}[0-9]{1}[A-Za-z]{3}[0-9]{5}"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              required
              placeholder="Email"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              pattern="[0-9]{10}"
              className="w-full p-3 rounded-md bg-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10 w-full">
              <div className="relative my-auto">
                <input
                  id="chckbx"
                  type="checkbox"
                  className="w-5 h-5 rounded border-2 border-gray-400 bg-white/10 text-pink-500 focus:ring-2 focus:ring-pink-500 focus:ring-offset-0 transition-all duration-200"
                />
              </div>
              <label htmlFor="chckbx" className="text-sm text-gray-300 leading-relaxed cursor-pointer">
                By signing up for this workshop, I acknowledge that participation does not grant me membership or free entry into amFOSS
              </label>
            </div>
            </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-md w-full">
          <div className="flex flex-col items-center space-y-6">
            <p className="text-3xl md:text-5xl font-Lalezar text-gray-200">
              Bill
            </p>

            <div className="grid grid-cols-3 w-full border-b border-gray-500 pb-2 text-sm md:text-base text-gray-300 font-semibold text-center">
              <p>Item</p>
              <p>Details</p>
              <p>Total</p>
            </div>

            <div className="grid grid-cols-3 w-full text-sm md:text-base text-gray-200 text-center py-2 border-b border-gray-800">
              <p>Seats × {seatsNo}</p>
              <p>$ 250 × {seatsNo}</p>
              <p>$ {seatsNo * 250}</p>
            </div>
            <div className="grid grid-cols-3 w-full text-sm md:text-base text-gray-200 text-center py-2 border-b border-gray-800">
              <p>Taxes</p>
              <p>-</p>
              <p>$ 5</p>
            </div>

            <div className="flex justify-center w-full text-sm mt-2 mb-2  md:text-base text-gray-100 font-bold">
              <p className="col-span-2  pr-4">Total Cost:</p>
              <p className="text-green-400">$ {250 * seatsNo + 5}</p>
            </div>

            <button type="submit" className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-md text-white font-bold">
              Pay Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
