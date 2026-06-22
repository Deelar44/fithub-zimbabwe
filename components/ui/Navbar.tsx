"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useUser } from "@/context/UserContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn, logout } = useUser();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Coaches", href: "/coaches" },
    { name: "Community", href: "/community" },
    { name: "Events", href: "/events" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">F</span>
            </div>
            <span className="font-extrabold text-2xl text-gray-900 dark:text-white">
              FitHub<span className="text-emerald-500">.</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.href)
                    ? "text-emerald-600"
                    : "text-gray-600 hover:text-emerald-500 dark:text-gray-400 focus:gray-600 dark:hover:text-emerald-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Auth & Theme */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button onClick={logout} variant="outline">
                  Log Out
                </Button>
              </>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button variant="ghost">Log In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button className="bg-[#10B981]">Sign Up</Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu*/}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-gray-700 dark:text-gray-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 flex flex-col gap-3 border-t border-gray-100 dark:border-gray-800">
            <ThemeToggle />
            <Link href="/sign-in" onClick={() => setIsOpen(false)}>
              <Button variant="outline" className="w-full h-12 font-bold">
                Log In
              </Button>
            </Link>
            <Link href="/sign-up" onClick={() => setIsOpen(false)}>
              <Button className="w-full h-12 bg-[#10B981] font-bold">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
