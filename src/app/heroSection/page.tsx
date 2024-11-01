import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto max-w-6xl px-4">
        <h1 className="text-[#1e40af] font-bold text-2xl text-center mb-8">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
        
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">

          <div className="bg-white rounded-lg shadow-md p-8 flex-1 hover:shadow-lg transition-shadow duration-300">
            <div className="max-w-md">
              <h2 className="text-[#1e40af] font-semibold text-xl mb-6">
                Post Your Ad on PakWheels
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">Post your Ad for Free in 3 Easy Steps</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">Get Genuine offers from Verified Buyers</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">Sell your car Fast at the Best Price</p>
                </li>
              </ul>
              <Link href="/post-ad">
                <button className="w-full bg-[#dc2626] text-white font-semibold py-3.5 px-4 rounded hover:bg-[#b91c1c] transition duration-300 text-base">
                  Post Your Ad
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center mx-4">
            <div className="bg-white px-6 py-2 rounded-full text-gray-500 text-xl font-medium shadow-sm">
              OR
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 flex-1 hover:shadow-lg transition-shadow duration-300">
            <div className="max-w-md">
              <h2 className="text-[#1e40af] font-semibold text-xl mb-6">
                Try PakWheels Sell It For Me
              </h2>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">Dedicated Sales Expert to Sell your Car</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">We Bargain for you and share the Best Offer</p>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#dc2626] text-xl font-bold">•</span>
                  <p className="text-gray-600 text-base">We ensure Safe & Secure Transaction</p>
                </li>
              </ul>
              <Link href="/sell-it-for-me">
                <button className="w-full bg-[#1e40af] text-white font-semibold py-3.5 px-4 rounded hover:bg-[#1e3a8a] transition duration-300 text-base">
                  Register Your Car
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}