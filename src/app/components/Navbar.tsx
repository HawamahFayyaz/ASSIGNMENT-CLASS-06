import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="grid grid-cols-12 justify-start bg-[#1e1e1e] px-16">
        {" "}
        <div className="flex items-center col-span-8 pl-3 pb-2 pt-2">
          <Image
            src="/mobile.png"
            alt="Mobile Icon"
            width={16}
            height={16}
            className=""
          />
          <Link href="#" legacyBehavior>
            <h1 className="text-white text-sm cursor-pointer">
              Download App via SMS
            </h1>
          </Link>
        </div>
        <div className="flex col-span-4 justify-end pr-3 pt-2 space-x-2">
          <Link href="#" legacyBehavior>
            <p className="text-rose-600 cursor-pointer">اردو</p>
          </Link>
          <Link href="#" legacyBehavior>
            <p className="text-white text-sm cursor-pointer">
              Sign In | Sign Up
            </p>
          </Link>
        </div>
        <div className="col-span-12 px-3">
          <hr className="items-center border-t border-gray-700 w-full" />
        </div>
        <div className="grid row-span-3 col-span-2 h-full justify-items-start">
          <Link href="/Home" legacyBehavior>
            <a>
              <Image
                src="/Logo.png"
                alt="PakWheels Logo"
                width={150}
                height={50}
                className="m-2 cursor-pointer"
              />
            </a>
          </Link>
        </div>
        <div className="flex justify-start pl-1 items-center pt-3 w-full text-base col-span-10 space-x-14">
          <Link href="/used-cars" legacyBehavior>
            <a className="text-white">Used Cars</a>
          </Link>

          <Link href="/new-cars" legacyBehavior>
            <a className="text-white">New Cars</a>
          </Link>

          <Link href="/bikes" legacyBehavior>
            <a className="text-white">Bikes</a>
          </Link>

          <Link href="/auto-store" legacyBehavior>
            <a className="text-white">Auto Store</a>
          </Link>

          <Link href="/videos" legacyBehavior>
            <a className="text-white">Videos</a>
          </Link>

          <Link href="/forums" legacyBehavior>
            <a className="text-white">Forums</a>
          </Link>

          <Link href="/blog" legacyBehavior>
            <a className="text-white">Blog</a>
          </Link>

          <Link href="/more" legacyBehavior>
            <a className="text-white">More</a>
          </Link>

          <div className="pr-3">
            <Link href="#" legacyBehavior>
              <button className="rounded-md bg-[#dc2626] h-10 w-32 hover:bg-[#b91c1c] transition">
                {" "}
                <a className="justify-center text-white">Post an Ad</a>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
