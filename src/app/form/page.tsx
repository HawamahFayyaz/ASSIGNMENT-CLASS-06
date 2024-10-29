import Link from "next/link"
export default function From (){

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form className="bg-white p-8 rounded-lg shadow-md w-96 text-black">
            <h2 className="text-2xl font-bold mb-6 text-center text-black">Payment Form</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your name" />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your email" />
            </div>
    
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="phone">Phone No</label>
              <input
                type="tel"
                id="phone"
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                placeholder="Enter your phone number"  />
            </div>

    
            <Link href="/thankyou">
              <button
                type="button"
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Pay Now
              </button>
            </Link>
          </form>
        </div>
      )
    }