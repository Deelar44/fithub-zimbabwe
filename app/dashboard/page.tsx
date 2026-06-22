"use client";

import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  CalendarDays,
  Users,
  Settings,
  MessageCircle,
  Bell,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PremiumDashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 border-r border-gray-800 p-6 flex flex-col justify-between">
        <div className="space-y-8">
          <h1 className="text-2xl font-black text-emerald-500">FitHub</h1>
          <nav className="space-y-2">
            {[
              { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
              { name: "My Events", icon: CalendarDays, path: "/events" },
              { name: "Communities", icon: Users, path: "/communities" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => router.push(item.path)}
                className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-900 rounded-xl font-bold transition-colors"
              >
                <item.icon className="w-5 h-5" /> {item.name}
              </button>
            ))}
          </nav>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 text-gray-500 font-bold hover:text-white transition-colors">
          <Settings className="w-5 h-5" /> Settings
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black tracking-tighter">
              Welcome back, Delight
            </h1>
            <p className="text-gray-500">Managing your fitness ecosystem</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-gray-900 rounded-full hover:bg-gray-800 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="w-12 h-12 bg-gray-800 rounded-full border-2 border-emerald-500" />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Main Focus Card */}
          <div
            onClick={() => router.push("/events/active")}
            className="lg:col-span-2 bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-emerald-500 transition-all cursor-pointer group"
          >
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">
              Next Session
            </p>
            <h2 className="text-2xl font-black mb-6 group-hover:text-emerald-400 transition-colors">
              Harare Marathon Prep Run
            </h2>
            <div className="flex gap-4">
              <Button className="bg-emerald-500 hover:bg-emerald-600 rounded-xl">
                View Details
              </Button>
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-emerald-600 p-8 rounded-3xl text-white shadow-xl flex flex-col justify-between cursor-pointer hover:bg-emerald-500 transition-all">
            <p className="font-bold opacity-80">Action Required</p>
            <h3 className="text-xl font-black">Confirm Payment</h3>
            <Button className="bg-white text-emerald-700 hover:bg-gray-100 rounded-xl">
              Complete via WhatsApp
            </Button>
          </div>
        </div>

        {/* ACTIVITY TABLE */}
        <div className="bg-gray-900 rounded-3xl border border-gray-800 p-8">
          <h3 className="font-black text-xl mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b border-gray-800 pb-6 last:border-0 last:pb-0 hover:bg-gray-800/50 p-2 rounded-xl transition-all cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-bold">Message from Coach</p>
                    <p className="text-sm text-gray-500">
                      Regarding your registration status
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-600" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
