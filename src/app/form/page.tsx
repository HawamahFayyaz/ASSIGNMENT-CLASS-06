"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const validateForm = () => {
    let formErrors: { [key: string]: string } = {};

    if (!name.trim()) formErrors.name = "Name is required";
    if (!email.trim()) formErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = "Email is invalid";
    if (!phone.trim()) formErrors.phone = "Phone number is required";
    else if (!/^\d{11}$/.test(phone))
      formErrors.phone = "Phone number must be 11 digits";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { name, email, phone });
      router.push("/thankyou");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-[#1e40af]">
          Payment Form
        </h2>

        <div className="mb-4">
          <label
            className="block text-[#1e40af] text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-900 ${
              errors.name
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-[#1e40af] text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-900 ${
              errors.email
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-[#1e40af] text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone No
          </label>
          <input
            type="tel"
            id="phone"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 text-gray-900 ${
              errors.phone
                ? "border-red-500 focus:ring-red-200"
                : "border-gray-300 focus:ring-blue-200"
            }`}
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />{" "}
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#1e40af] text-white font-bold py-3 px-4 rounded-lg hover:bg-[#1e3a8a] transition duration-300"
        >
          Pay Now
        </button>

        <div className="mt-4 text-center">
          <Link href="/" className="text-[#1e40af] hover:underline">
            Back to Home
          </Link>
        </div>
      </form>
    </div>
  );
}
