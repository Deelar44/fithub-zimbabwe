"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-emerald-600">
          FitHub
        </Link>

        <nav className="flex items-center gap-4">
          <Link href="/events" className="font-bold text-sm">
            Events
          </Link>
          <Link href="/communities" className="font-bold text-sm">
            Communities
          </Link>

          {isLoggedIn ? (
            <Link href="/dashboard">
              <Button className="rounded-full bg-emerald-500">
                My Dashboard
              </Button>
            </Link>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="rounded-full">
                Log In
              </Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
