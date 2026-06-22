"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, CalendarDays, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const handleWhatsAppRegister = (e: any, eventTitle: string) => {
  const phoneNumber = "263786698220";
  const message = `Hi! I'd like to register for the event: ${eventTitle}.`;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(url, "_blank");
};

const EVENTS = [
  {
    id: "harare-marathon-prep",
    title: "Harare Marathon Prep Run",
    category: "Running",
    location: "Harare",
    date: "Jul 18, 2026",
    time: "05:30 AM",
    price: "$5.00",
    spotsLeft: 4,
    hostName: "Kate Moyo",
    hostId: "1",
    hostImage:
      "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=200",
    image:
      "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800",
  },
  {
    id: "fithub-power-meet",
    title: "FitHub Powerlifting Meet",
    category: "Strength",
    location: "Bulawayo",
    date: "Aug 02, 2026",
    time: "09:00 AM",
    price: "$15.00",
    spotsLeft: 12,
    hostName: "Daniel Charuma",
    hostId: "3",
    hostImage:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=200",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },
];

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLocation, setActiveLocation] = useState("All");

  const filtered = EVENTS.filter((e) => {
    const matchesSearch = e.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || e.category === activeCategory;
    const matchesLocation =
      activeLocation === "All" || e.location === activeLocation;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10 dark:bg-gray-950 min-h-screen">
      {/* HEADER*/}
      <div className="space-y-6">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter">
          Upcoming Events
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search events..."
              className="pl-12 h-14 rounded-2xl border-gray-200 dark:border-gray-800"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="h-14 px-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-sm font-bold"
            onChange={(e) => setActiveLocation(e.target.value)}
          >
            <option value="All">All Locations</option>
            {["Harare", "Bulawayo", "Gweru", "Mutare"].map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* CATEGORY TABS*/}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {["All", "Running", "Strength", "Bootcamp", "Cycling", "Yoga"].map(
            (cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                className="rounded-full px-6 font-bold"
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </Button>
            ),
          )}
        </div>
      </div>

      {/* EVENTS GRID*/}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((e) => (
          <div
            key={e.id}
            className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
          >
            <div className="h-56 relative">
              <Image
                src={e.image}
                alt={e.title}
                fill
                className="object-cover"
              />
              {/* Date Badge */}
              <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold text-emerald-600">
                <CalendarDays className="w-3 h-3" /> {e.date}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <Link
                href={`/coaches/${e.hostId}`}
                className="flex items-center gap-2 mb-4 group"
              >
                <div className="w-8 h-8 rounded-full overflow-hidden border">
                  <Image
                    src={e.hostImage}
                    alt={e.hostName}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
                <span className="text-xs font-bold text-gray-500 group-hover:text-emerald-600">
                  Hosted by {e.hostName}
                </span>
              </Link>

              <h3 className="font-black text-xl text-gray-900 dark:text-white mb-4">
                {e.title}
              </h3>

              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" /> {e.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> {e.time}
                </span>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-12 rounded-xl font-bold bg-emerald-500 hover:bg-emerald-600 text-white">
                    Register Now ({e.price})
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Secure your spot for {e.title}</DialogTitle>
                    <DialogDescription>
                      Enter your details to finalize your registration and
                      receive payment instructions via WhatsApp.
                    </DialogDescription>
                  </DialogHeader>
                  {/* Form: Name, WhatsApp Number */}
                  <Button onClick={() => handleWhatsAppRegister(e, e.title)}>
                    Complete Registration
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
