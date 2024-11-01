import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Thank You!
        </h1>

        <div>
          <p className="text-gray-700 text-lg mb-6">
            Your payment has been successfully processed. We appreciate your business!
          </p>

          <div className="text-gray-600 mb-8">
            <p>A confirmation email has been sent to your email address.</p>
          </div>

          <Link href="/">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}