"use client";
import Image from "next/image";
import Link from "next/link";

export default function CarDetail() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">

          <div className="text-sm mb-4 bg-white px-4 py-2 rounded-lg shadow-sm">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <span className="mx-2 text-gray-500">{">"}</span>
            <Link href="/new-cars" className="text-blue-600 hover:underline">
              New Cars
            </Link>
            <span className="mx-2 text-gray-500">{">"}</span>
            <span className="text-gray-800 font-medium">Toyota Corolla</span>
          </div>

          <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 bg-white py-4 rounded-lg shadow-md">
            Toyota Corolla 2024
          </h1>

          <div className="relative h-[500px] w-full mb-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/Corolla.jpg"
              alt="Toyota Corolla"
              fill
              className="object-contain p-4 hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          <div className="text-center mb-8 bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-4">
              PKR 5,500,000
            </div>
            <div className="flex justify-center gap-6">
              <Link href="/form">
                <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-green-600 transition duration-300 shadow-md">
                  Book Now
                </button>
              </Link>
              <button className="bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition duration-300 shadow-md">
                Get Insurance Quote
              </button>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              About Toyota Corolla 2024
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Toyota Corolla 2024 is a series of compact sedans produced by the
              Japanese manufacturer Toyota. Known for its reliability, comfort, and
              value for money, the Corolla continues to be one of the best-selling
              cars globally. This model comes with enhanced features including
              improved fuel efficiency, advanced safety features, and a comfortable
              interior designed for both driver and passengers.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Key Features
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-gray-700 mb-1">Engine</div>
                <div className="font-semibold text-gray-900">1800 CC</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-gray-700 mb-1">Transmission</div>
                <div className="font-semibold text-gray-900">Automatic</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-gray-700 mb-1">Fuel Type</div>
                <div className="font-semibold text-gray-900">High Octane</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors duration-300">
                <div className="text-gray-700 mb-1">Mileage</div>
                <div className="font-semibold text-gray-900">12 KM/L</div>
              </div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Technical Specifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Number of Doors</span>
                <span className="font-semibold text-gray-900">4</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Condition</span>
                <span className="font-semibold text-gray-900">8.5/10</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Driven</span>
                <span className="font-semibold text-gray-900">9,500 KM</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Suspension Type</span>
                <span className="font-semibold text-gray-900">Soft Suspension</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Average</span>
                <span className="font-semibold text-gray-900">12 KM per Ltr</span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 hover:bg-gray-50 px-2 rounded transition-colors duration-300">
                <span className="text-gray-700">Transmission</span>
                <span className="font-semibold text-gray-900">Automatic</span>
              </div>
            </ div>
          </div>

          <div className="text-center mt-8">
            <Link href="/">
              <button className="text-blue-600 hover:text-blue-800 font-semibold hover:underline transition duration-300 bg-white px-6 py-3 rounded-lg shadow-md">
                ← Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}