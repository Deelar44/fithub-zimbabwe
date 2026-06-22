"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const MOCK_COACHES = [
  {
    id: 1,
    name: "Kate Moyo",
    specialty: "Marathon Prep",
    rating: 4.8,
    exp: "5+ Yrs",
    image:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600",
  },
  {
    id: 2,
    name: "Tariro Muzenda",
    specialty: "Aerobics",
    rating: 4.9,
    exp: "2+ Yrs",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
  },
  {
    id: 3,
    name: "Daniel Charuma",
    specialty: "Strength",
    rating: 3.9,
    exp: "3+ Yrs",
    image:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600",
  },
  {
    id: 4,
    name: "Farai Nyathi",
    specialty: "Marathon Prep",
    rating: 4.5,
    exp: "4+ Yrs",
    image:
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=600",
  },
];

const CATEGORIES = ["All", "Marathon Prep", "Aerobics", "Strength"];

export default function CoachesPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showTopRated, setShowTopRated] = useState(false);

  const filteredCoaches = MOCK_COACHES.filter((coach) => {
    const matchesCategory =
      activeCategory === "All" || coach.specialty === activeCategory;
    const matchesRating = !showTopRated || coach.rating >= 4.5;
    return matchesCategory && matchesRating;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 md:py-20 dark:bg-gray-950">
      {/* Page Header */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-black mb-4 dark:text-white">
          Find Your Expert Coach
        </h1>
        <p className="text-gray-500 max-w-lg">
          Connect with professional trainers in your area. Filter by specialty
          to match your fitness goals.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-12">
        {/* Category Buttons */}
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeCategory === cat
                ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
                : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}

        {/* Rating Filter Toggle */}
        <button
          onClick={() => setShowTopRated(!showTopRated)}
          className={`px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${
            showTopRated
              ? "border-emerald-500 bg-emerald-500/10 text-emerald-500"
              : "border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400"
          }`}
        >
          {showTopRated ? "★ Showing Top Rated" : "★ Filter Top Rated (4.5+)"}
        </button>
      </div>

      {/* Directory Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredCoaches.length > 0 ? (
          filteredCoaches.map((coach) => (
            <div
              key={coach.id}
              className="group relative bg-white dark:bg-gray-900 rounded-[2rem] p-6 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/50 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10"
            >
              {/* Decorative glow */}
              <div className="absolute pointer-events-none inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-50 dark:border-gray-800 group-hover:border-emerald-500/20 transition-colors">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Info */}
              <div className="text-center space-y-1">
                <h3 className="font-black text-xl dark:text-white">
                  {coach.name}
                </h3>
                <p className="text-emerald-500 font-bold text-sm tracking-wide uppercase">
                  {coach.specialty}
                </p>
              </div>

              {/* Stats */}
              <div className="flex justify-center gap-8 mt-6 py-4 border-y border-gray-100 dark:border-gray-800">
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Rating
                  </p>
                  <p className="font-bold text-lg dark:text-white">
                    ⭐ {coach.rating}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest">
                    Exp
                  </p>
                  <p className="font-bold text-lg dark:text-white">
                    {coach.exp}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6">
                <Button
                  asChild
                  className="w-full h-12 rounded-xl bg-gray-900 dark:bg-white dark:text-black hover:bg-emerald-500 hover:text-white transition-all font-bold cursor-pointer"
                >
                  <Link href={`/coaches/${coach.id}`}>View Profile</Link>
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full py-20 text-center text-gray-500 dark:text-gray-400">
            No coaches found in this category.
          </p>
        )}
      </div>
    </main>
  );
}
