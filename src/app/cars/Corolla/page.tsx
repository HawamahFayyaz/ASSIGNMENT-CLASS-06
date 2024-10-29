"use client";
import Image from "next/image";
import Link from "next/link";

export default function Corolla() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Toyota Corolla 2024 Details
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <Image
              src="/Corolla.jpg"
              alt="Toyota Corolla"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Toyota Corolla 2024</h2>
            <p className="text-gray-600">
              Toyota Corolla 2024 is a series of compact sedans produced by the
              Japanese manufacturer Toyota...
            </p>
            <ul className="list-group">
              <li className="list-group-item">Number of Doors: 4</li>
              <li className="list-group-item">Engine: 1800 CC</li>
              <li className="list-group-item">Condition: 8.5/10</li>
              <li className="list-group-item">Driven: 9,500 KM</li>
              <li className="list-group-item">
                Suspension Type: Soft Suspension
              </li>
              <li className="list-group-item">Avg 12 KM per Itr</li>
              <li className="list-group-item">Transmission: Automatic</li>
              <li className="list-group-item">Fuel Type: High Octane</li>
            </ul>
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-green-600">
                PKR 50,00,000
              </h3>
              <Link href="/form">
                <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                  Make Payment
                </button>
              </Link>{" "}
            </div>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block mt-8 text-blue-500 hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}