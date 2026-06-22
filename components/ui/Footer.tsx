import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* LOGO & ABOUT */}
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-sm group-hover:bg-emerald-400 transition-colors">
                <span className="text-white font-black text-xl leading-none tracking-tighter">
                  F
                </span>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                FitHub<span className="text-emerald-500">.</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Zimbabwe's premier platform for discovering elite coaches, joining
              active communities and booking local fitness events.
            </p>
          </div>

          {/* LINKS COLUMNS */}
          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/coaches"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Find a Coach
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Communities
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Upcoming Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
              Company
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Waiver & Liability
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {currentYear} FitHub Zimbabwe. All rights reserved.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
            <div className="w-8 h-8 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors cursor-pointer"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
