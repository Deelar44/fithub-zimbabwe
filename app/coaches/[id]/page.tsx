"use client";

import { Button } from "@/components/ui/button";
import { Star, MapPin, Award, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function PremiumCoachProfile() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 dark:bg-gray-950 min-h-screen">
      {/* HERO SECTION*/}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
        <div className="md:col-span-4 h-96 rounded-3xl overflow-hidden relative shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600"
            alt="Coach"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:col-span-8">
          <h1 className="text-6xl font-black mb-4">Daniel Charuma</h1>
          <p className="text-xl text-gray-500">
            Strength & Conditioning Expert
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN*/}
        <div className="lg:col-span-8 space-y-12">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-3">
              Philosophy
            </h2>
            <p className="text-3xl font-medium text-gray-900 dark:text-gray-100 leading-tight">
              "True transformation isn't just about weight on the bar; it's
              about the{" "}
              <span className="text-emerald-500 font-bold">resilience</span> you
              build for life."
            </p>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Daniel Charuma is a performance coach who bridges the gap between
              clinical mechanics and raw athletic output. With over 3 years of
              experience, he helps athletes break through plateaus using
              data-backed programming and form-first methodologies.
            </p>
          </section>

          <section className="flex flex-wrap gap-6 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
            {[
              { label: "Certification", value: "ACE Certified CPT" },
              { label: "Specialty", value: "Strength & Conditioning" },
              { label: "Experience", value: "3+ Years" },
            ].map((item, i) => (
              <div
                key={i}
                className="border-r border-gray-100 dark:border-gray-800 pr-6 last:border-0"
              >
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none">
            <div className="mb-6">
              <span className="text-xs font-bold text-gray-400 uppercase">
                Starting at
              </span>
              <div className="text-5xl font-black mt-1">$25</div>
            </div>

            <div className="space-y-3 mb-8">
              {[
                "60-min Assessment",
                "Form Correction",
                "Data-Backed Tracking",
              ].map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-sm font-medium"
                >
                  <CheckCircle className="w-5 h-5 text-emerald-500" /> {feat}
                </div>
              ))}
            </div>

            <Button className="w-full h-14 text-lg bg-black dark:bg-white dark:text-black hover:bg-emerald-500 hover:text-white transition-colors rounded-2xl">
              Book via WhatsApp
            </Button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Typically replies in under 1 hour
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
