import Link from "next/link";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Thank You for Your Purchase!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your payment has been successfully processed. We will contact you shortly with further details.
        </p>
        
        <div className="text-gray-500 mb-8">
          <p>A confirmation email has been sent to your email address.</p>
        </div>

        <Link href="/">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            Return to Home
          </button>
        </Link>
      </div>
    </div>
  );
}