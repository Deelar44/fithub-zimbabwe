import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { UserProvider } from "@/context/UserContext";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FitHub Zimbabwe",
  description: "Find Your Fitness Tribe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased bg-white dark:bg-gray-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <UserProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />

              <main className="flex-1">{children}</main>

              <Footer />
            </div>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
