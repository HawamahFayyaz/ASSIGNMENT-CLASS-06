"use client";
import Image from "next/image";
import Link from "next/link";

export default function hondaCity() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Honda City 2024 2024 Details
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <Image
              src="/City.jpg"
              alt="Honda City 2024"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Honda City 2024</h2>
            <p className="text-gray-600">
              The Honda City 2024 is a subcompact sedan that has been
              manufactured by the Japanese automobile manufacturer Honda since
              1981. Initially, it was a 3-door hatchback/2-door convertible
              launched only in selected markets. The second-generation Honda
              City was launched in 1986, but the City nameplate was discontinued
              in 1994 and replaced by another model.{" "}
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
                PKR 5,850,000
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
