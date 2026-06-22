"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  ArrowLeft,
  CheckCircle2,
  Ticket,
  Info,
  QrCode,
  Download,
} from "lucide-react";

const eventDatabase: Record<string, any> = {
  "zvishavane-bootcamp": {
    title: "Zvishavane Morning Bootcamp",
    category: "Bootcamp",
    location: "Zvishavane Sports Club, Main Arena",
    date: "Jul 12, 2026",
    time: "06:00 AM - 08:00 AM",
    price: "Free",
    capacity: 50,
    enrolled: 32,
    image: "/zvishavane-morning-bootcamp.jpg",
    description:
      "Start your day with a high-energy, full-body workout designed for all fitness levels. This bootcamp focuses on functional movements, cardiovascular endurance, and community building. Bring water, a towel, and your best effort!",
    host: "FitHub Zvishavane Team",
    agenda: [
      { time: "06:00 AM", title: "Arrival & Warm-up" },
      { time: "06:15 AM", title: "HIIT Circuit 1" },
      { time: "07:00 AM", title: "Team Relay Challenges" },
      { time: "07:45 AM", title: "Cool-down & Stretching" },
    ],
  },
  "harare-marathon-prep": {
    title: "Harare Marathon Prep Run",
    category: "Running",
    location: "Harare Botanical Gardens",
    date: "Jul 18, 2026",
    time: "05:30 AM - 08:30 AM",
    price: "$5.00",
    capacity: 100,
    enrolled: 89,
    image: "/harare-crossfit.jpg",
    description:
      "Join our elite pacers for a 15km and 21km prep run ahead of the upcoming marathon season. Route maps and hydration stations will be provided. Perfect for testing your race-day nutrition and pacing.",
    host: "Harare Sunrise Striders",
    agenda: [
      { time: "05:30 AM", title: "Pacer Introductions & Route Briefing" },
      { time: "05:45 AM", title: "Run Commences" },
      { time: "08:00 AM", title: "Post-Run Coffee & Feedback" },
    ],
  },
};

export default function EventDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const { id } = resolvedParams;

  const event = eventDatabase[id] || {
    title: "Event Not Found",
    description:
      "The event you are looking for does not exist or has been removed.",
    image: "/fithub-cbd.jpg",
  };

  const [registrationState, setRegistrationState] = useState<
    "idle" | "processing" | "success"
  >("idle");

  const handleRegistration = () => {
    setRegistrationState("processing");

    setTimeout(() => {
      setRegistrationState("success");
    }, 2000);
  };

  if (event.title === "Event Not Found") {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
        <p className="text-gray-500 mb-8">
          We couldn't find the event you were looking for.
        </p>
        <Link href="/events">
          <Button className="bg-[#10B981] hover:bg-[#0d9488]">
            Back to Events
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* BACK NAVIGATION */}
      <Link
        href="/events"
        className="inline-flex items-center text-sm text-gray-500 hover:text-[#10B981] mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to all events
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN: EVENT DETAILS */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div className="w-full h-[400px] relative rounded-3xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-emerald-700 shadow-sm">
              {event.category}
            </div>
          </div>

          {/* Title & Core Info */}
          <div>
            <h1 className="text-4xl font-extrabold text-[#1A1A1A] mb-6">
              {event.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-gray-600 border-b border-gray-100 pb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">{event.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">{event.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
                <span className="font-medium">{event.location}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <section>
            <h2 className="text-2xl font-bold mb-4">About this event</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {event.description}
            </p>
          </section>

          {/* Agenda */}
          {event.agenda && (
            <section className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-6">Schedule</h2>
              <div className="space-y-6">
                {event.agenda.map((item: any, index: number) => (
                  <div key={index} className="flex gap-6">
                    <div className="w-24 shrink-0 font-bold text-emerald-600">
                      {item.time}
                    </div>
                    <div className="flex-grow">
                      <div className="font-semibold text-gray-900">
                        {item.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* RIGHT COLUMN: STICKY REGISTRATION CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-3xl p-6 border border-gray-200 shadow-lg shadow-gray-100/50">
            {/* Dynamic Ticket State */}
            {registrationState === "success" ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  You're In!
                </h3>
                <p className="text-gray-500 mb-6">
                  Your digital ticket and preparation instructions have been
                  emailed to you.
                </p>

                {/* TICKET MODAL TRIGGER */}

                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-gray-50 p-4 rounded-xl border border-dashed border-gray-300 flex items-center justify-center gap-3 text-gray-700 font-semibold hover:bg-gray-100 hover:border-emerald-300 transition-all cursor-pointer">
                      <Ticket className="w-5 h-5 text-emerald-600" /> View
                      Digital Ticket
                    </button>
                  </DialogTrigger>

                  {/* TICKET DESIGN */}
                  <DialogContent className="sm:max-w-md bg-transparent border-0 shadow-none p-0 flex justify-center">
                    <div className="sr-only">
                      <DialogTitle>Your Event Ticket</DialogTitle>
                      <DialogDescription>
                        Digital ticket for {event.title} on {event.date}.
                      </DialogDescription>
                    </div>

                    <div className="bg-white w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl relative">
                      {/* Ticket Header */}
                      <div className="bg-[#10B981] p-8 text-center relative overflow-hidden">
                        <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
                        <div className="absolute -left-6 -bottom-6 w-24 h-24 bg-black/10 rounded-full blur-xl"></div>

                        <h2 className="text-2xl font-extrabold text-white mb-2 relative z-10">
                          {event.title}
                        </h2>
                        <p className="text-emerald-50 font-medium text-sm relative z-10">
                          {event.date} • {event.time.split(" - ")[0]}
                        </p>
                      </div>

                      {/* Ticket Body */}
                      <div className="p-8 flex flex-col items-center relative">
                        <div className="absolute -left-4 top-0 w-8 h-8 bg-black/50 rounded-full -translate-y-1/2"></div>
                        <div className="absolute -right-4 top-0 w-8 h-8 bg-black/50 rounded-full -translate-y-1/2"></div>

                        <div className="w-full border-t-2 border-dashed border-gray-200 absolute top-0 left-0"></div>

                        {/* QR Code Mockup */}
                        <div className="w-48 h-48 bg-white rounded-2xl flex items-center justify-center mb-8 border border-gray-100 shadow-sm">
                          <QrCode
                            className="w-40 h-40 text-gray-800"
                            strokeWidth={1}
                          />
                        </div>

                        {/* Event Details */}
                        <div className="w-full space-y-4 text-sm text-gray-500 mb-8">
                          <div className="flex justify-between border-b border-gray-50 pb-3">
                            <span>Attendee:</span>{" "}
                            <span className="font-bold text-gray-900">
                              Guest User
                            </span>
                          </div>
                          <div className="flex justify-between border-b border-gray-50 pb-3">
                            <span>Location:</span>{" "}
                            <span className="font-bold text-gray-900 text-right w-1/2 truncate">
                              {event.location}
                            </span>
                          </div>
                          <div className="flex justify-between pb-1">
                            <span>Ticket Type:</span>{" "}
                            <span className="font-bold text-emerald-600">
                              General Admission
                            </span>
                          </div>
                        </div>

                        {/* Download Button */}
                        <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 rounded-xl flex items-center gap-2">
                          <Download className="w-4 h-4" /> Save to Device
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {event.price}
                  </span>
                  {event.price !== "Free" && (
                    <span className="text-gray-500 text-sm ml-1">/ person</span>
                  )}
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <Users className="w-4 h-4" /> Capacity
                    </span>
                    <span className="font-semibold">
                      {event.capacity} spots
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> Enrolled
                    </span>
                    <span className="font-semibold">
                      {event.enrolled} attendees
                    </span>
                  </div>

                  {/* Progress Bar for Scarcity */}
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full"
                      style={{
                        width: `${(event.enrolled / event.capacity) * 100}%`,
                      }}
                    ></div>
                  </div>
                  {event.capacity - event.enrolled <= 20 && (
                    <p className="text-xs text-amber-600 flex items-center gap-1 mt-1">
                      <Info className="w-3 h-3" /> Only{" "}
                      {event.capacity - event.enrolled} spots left!
                    </p>
                  )}
                </div>

                <Button
                  onClick={handleRegistration}
                  disabled={registrationState === "processing"}
                  className="w-full h-14 text-lg font-bold bg-[#10B981] hover:bg-[#0d9488] text-white transition-all shadow-md hover:shadow-lg"
                >
                  {registrationState === "processing"
                    ? "Processing..."
                    : "Reserve My Spot"}
                </Button>

                <p className="text-xs text-center text-gray-400 mt-4">
                  By registering, you agree to the FitHub Zimbabwe terms of
                  service and liability waiver.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
