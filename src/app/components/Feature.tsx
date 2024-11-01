import Link from "next/link";
import Image from "next/image";

interface CarCardProps {
  href: string;
  imageSrc: string;
  name: string;
  price: string;
  year: string;
  mileage: string;
  location: string;
}

function CarCard({
  href,
  imageSrc,
  name,
  price,
  year,
  mileage,
  location,
}: CarCardProps) {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative h-48">
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-[#1e40af] font-semibold text-lg mb-2">{name}</h3>
          <p className="text-[#dc2626] font-bold text-lg mb-2">{price}</p>
          <div className="text-gray-600 text-sm">
            <p>{`${year} | ${mileage} | ${location}`}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Feature() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-[#1e40af] font-bold text-2xl mb-8">
          Featured Used Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CarCard
            href="/cars/Corolla"
            imageSrc="/Corolla.jpg"
            name="Toyota Corolla"
            price="PKR 59.7 - 75.5 lacs"
            year="2022"
            mileage="25,000 km"
            location="Karachi"
          />
          <CarCard
            href="/cars/Alto"
            imageSrc="/alto.png"
            name="Suzuki Alto"
            price="PKR 23.3 - 30.5 lacs"
            year="2023"
            mileage="10,000 km"
            location="Lahore"
          />
          <CarCard
            href="/cars/Hondacity"
            imageSrc="/City.jpg"
            name="Honda City"
            price="PKR 40.0 - 50.0 lacs"
            year="2021"
            mileage="35,000 km"
            location="Islamabad"
          />
          <CarCard
            href="/cars/HondaCivic"
            imageSrc="/Civic.jpg"
            name="Honda Civic"
            price="PKR 86.6 - 99.0 lacs"
            year="2023"
            mileage="15,000 km"
            location="Rawalpindi"
          />
        </div>
      </div>
    </div>
  );
}
