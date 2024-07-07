'use client'

import Header from "./components/landing_page/header";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="flex justify-center flex-wrap mt-10">

        <div className="text-4xl text-center font-bold uppercase mt-10 sm:justify-center">
          <h1>School Academics Management System</h1>
        </div>

      </div>

        <div className="text-sm font-light justify-center flex">
          From &copy;Domi Technologies
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/auth/signin">
            <button className="p-5 bg-blue-600 rounded-md text-white font-bold">Get Started</button>
          </Link>
        </div>
    </div>
  );
}
