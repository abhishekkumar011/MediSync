import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

function HeroSection() {
  return (
    <section className="md:mt-20">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Book <span className="text-blue-600">Appointments</span> with
              Trusted Doctors -<span className="text-blue-600"> Instantly</span>
            </h2>

            <p className="mt-4 text-gray-700">
              MediSync makes healthcare easy by connecting you with verified
              doctors, clinics, and specialists in just a few clicks. Schedule
              appointments, view availability, and manage your health—all in one
              simple, secure platform.
            </p>

            <Button className="bg-blue-600 text-white my-10 hover:bg-blue-500">Explore Now</Button>
          </div>

          <div>
            <Image
              src="/doctor.avif"
              width={800}
              height={800}
              className="rounded-xl shadow-2xl"
              alt="doctor"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
