import Link from "next/link";
import Image from "next/image";

// Add TypeScript interface for CarCard props
interface CarCardProps {
  href: string;
  imageSrc: string;
  name: string;
  price: string;
}

function CarCard({ href, imageSrc, name, price }: CarCardProps) {
  return (
    <Link href={href} className="cursor-pointer">
      <div className="grid h-40 w-full">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={225}
          className=""
        />
      </div>
      <div className="text-center">
        <h1 className="text-blue-700 font-bold text-base pt-3">{name}</h1>
      </div>
      <div className="text-center">
        <h1 className="text-green-500 font-normal text-sm">{price}</h1>
      </div>
    </Link>
  );
}

export default function Feature() {
  return (
    <div className="grid grid-cols-12 grid-rows-8 bg-zinc-100 h-[600px] px-20">
      <div className="col-start-2 col-span-10 row-span-8">
        <div className="flex justify-start h-[90px] col-span-8 row-span-2">
          <h1 className="pt-8 text-slate-600 font-semibold text-2xl">
            Featured New Cars
          </h1>
        </div>
        <div className="flex text-slate-800 gap-16 text-lg col-span-8 h-12 row-span-2">
          <Link href="/popular">
            <p className="hover:font-semibold">Popular</p>
          </Link>
          <Link href="/up-coming">
            <p className="hover:font-semibold">Up Coming</p>
          </Link>
          <Link href="/newly-launched">
            <p className="hover:font-semibold">Newly Launched</p>
          </Link>
        </div>
        <div className="col-span-10 pb-4">
          <hr className="items-center border-t border-gray-300 w-full" />
        </div>

        <div className="flex col-span-5 gap-6 row-span-4 h-64 bg-zinc-100">
          <CarCard
            href="/cars/Corolla"
            imageSrc="/Corolla.jpg"
            name="Toyota Corolla"
            price="PKR 59.7 - 75.5 lacs"
          />
          <CarCard
            href="/cars/Alto"
            imageSrc="/alto.png"
            name="Suzuki Alto"
            price="PKR 23.3 - 30.5 lacs"
          />
          <CarCard
            href="/cars/Hondacity"
            imageSrc="/City.jpg"
            name="Honda City"
            price="PKR 40.0 - 50.0 lacs"
          />
          <CarCard
            href="/cars/HondaCivic"
            imageSrc="/Civic.jpg"
            name="Honda Civic"
            price="PKR 86.6 - 99.0 lacs"
          />
        </div>
      </div>
    </div>
  );
}
