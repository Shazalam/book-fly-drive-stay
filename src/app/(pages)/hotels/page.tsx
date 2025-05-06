import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hotels",
  description: "Hotles bookings",
};

const Hotels = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center h-[75vh] ">
      <h1 className="text-4xl">work in progess </h1>
      <Link href={"/"} className="text-2xl text-emerald-700 font-bold">
        Go to Home
      </Link>
    </div>
  );
};

export default Hotels;
