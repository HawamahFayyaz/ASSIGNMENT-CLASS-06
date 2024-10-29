import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 bg-white h-[400px] w-full">
      <div className="row-span-1 flex justify-center">
        <h1 className="text-gray-700 font-bold text-2xl pt-10">
          Sell Your Car on PakWheels and Get the Best Price
        </h1>
      </div>
      <div className="grid grid-cols-5 grid-rows-5 px-52 justify-center">
        {/* Left Section */}
        <div className="col-span-2 row-span-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-white">
          <h1 className="text-blue-900 font-semibold text-xl pt-4 pl-8">
            Post Your Ad on PakWheels
          </h1>
          <div className="pt-3 pl-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">Post your Ad for Free in 3 Easy Steps</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">Get Genuine offers from Verified Buyers</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">Sell your car Fast at the Best Price</p>
              </div>
            </div>
            <div className="pt-6">
              <button className="rounded-md bg-rose-700 h-12 w-52 hover:bg-rose-800 transition-colors duration-300">
                <Link href="#" className="text-white w-full h-full flex items-center justify-center">
                  Post Your Ad
                </Link>
              </button>
            </div>
          </div>
        </div>

        {/* Middle OR Section */}
        <div className="flex items-center pr-8 col-span-1 row-span-4 justify-center">
          <div className="bg-white px-4 py-2 rounded-full text-slate-500 text-2xl font-medium shadow-sm">
            OR
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-2 row-span-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 bg-white">
          <h1 className="text-blue-900 font-semibold text-xl pt-4">
            Try PakWheels Sell It For Me
          </h1>
          <div className="pt-3">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">Dedicated Sales Expert to Sell your Car</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">We Bargain for you and share the Best Offer</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500 font-bold">•</span>
                <p className="text-slate-600">We ensure Safe & Secure Transaction</p>
              </div>
            </div>
            <div className="pt-6">
              <button className="rounded-md bg-blue-500 h-12 w-52 hover:bg-blue-600 transition-colors duration-300">
                <Link href="#" className="text-white w-full h-full flex items-center justify-center">
                  Register Your Car
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}