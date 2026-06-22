"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");
  const [requested, setRequested] = useState<string[]>([]);

  const handleRequest = (id: string) => {
    setRequested((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const communities = [
    {
      id: "1",
      title: "Zvishavane Dance Fit Club",
      category: "Aerobics",
      location: "Zvishavane",
      members: 35,
      verified: true,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800",
    },
    {
      id: "2",
      title: "FitHub Gym CBD Community",
      category: "Gyms",
      location: "Bulawayo",
      members: 200,
      verified: true,
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    },
    {
      id: "3",
      title: "Gweru Masters Swimming",
      category: "Clubs",
      location: "Gweru",
      members: 60,
      verified: false,
      image:
        "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&auto=format&fit=crop&q=60",
    },
    {
      id: "4",
      title: "Harare Crossfit Collective",
      category: "Gyms",
      location: "Harare",
      members: 110,
      verified: true,
      image:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=800",
    },
    {
      id: "5",
      title: "Mashonaland Cycling Club",
      category: "Runners",
      location: "Mashonaland",
      members: 120,
      verified: true,
      image:
        "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&auto=format&fit=crop&q=60",
    },
  ];

  const filtered = communities.filter((c) => {
    const matchesSearch = c.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || c.category === activeCategory;
    const matchesLocation =
      activeLocation === "All" || c.location === activeLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 dark:bg-gray-950 min-h-screen">
      <div className="space-y-6">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
          Community Discovery
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search communities by name..."
              className="pl-12 h-14 rounded-2xl border-gray-200 dark:border-gray-800"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            className="h-14 px-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm font-bold"
            onChange={(e) => setActiveLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            {["Zvishavane", "Bulawayo", "Gweru", "Harare"].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Runners", "Aerobics", "Gyms", "Clubs"].map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              className="rounded-full px-6 font-bold"
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-56 relative">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              {c.verified && (
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/50 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-emerald-600">
                  <CheckCircle2 className="w-3 h-3" /> Verified
                </div>
              )}
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-black text-xl text-gray-900 dark:text-white mb-4">
                {c.title}
              </h3>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {c.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4" /> {c.members}
                </span>
              </div>

              <div className="mt-auto">
                <Button
                  onClick={() => handleRequest(c.id)}
                  variant={requested.includes(c.id) ? "outline" : "default"}
                  className={`w-full h-12 rounded-xl font-bold transition-all ${
                    requested.includes(c.id)
                      ? "border-red-200 text-red-600 hover:bg-red-50"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white"
                  }`}
                >
                  {requested.includes(c.id)
                    ? "Cancel Request"
                    : "Request to Join"}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
