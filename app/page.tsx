import { Button } from "@/components/ui/button";
import { Users, Search, Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const events = [
    {
      title: "Zvishavane Morning Bootcamp",
      location: "Maglas Stadium",
      date: "12 Nov 5:00am",
      price: "Free",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
    },
    {
      title: "Big Team",
      location: "Shashe Road",
      date: "17 July 05:30am",
      price: "$5.00 entry fee",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800",
    },
    {
      title: "The 5am Club",
      location: "Maglas Stadium",
      date: "12 Nov 05:00am",
      price: "$2.00",
      image:
        "https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=800",
    },
  ];

  const coaches = [
    {
      name: "Kate Moyo",
      rating: "4.3",
      exp: "5+ Yrs",
      specialty: "Marathon Prep",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=600",
    },
    {
      name: "Tariro Muzenda",
      rating: "4.9",
      exp: "2+ Yrs",
      specialty: "Aerobics",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600",
    },
    {
      name: "Daniel Charuma",
      rating: "3.9",
      exp: "3+ Yrs",
      specialty: "Strength",
      image:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-12 md:space-y-20 dark:bg-gray-950">
      {/* HERO SECTION */}
      <section className="relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl flex items-center justify-center p-6 py-16 md:py-20 md:px-12 text-center min-h-[400px] md:min-h-[450px]">
        <Image
          src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200"
          alt="Group fitness training"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-5 md:space-y-6">
          <span className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white/10 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md border border-white/20">
            The Home of Zimbabwean Fitness
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tighter text-white">
            Find Your Fitness Tribe
          </h1>
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-md mx-auto md:max-w-full">
            Join high-energy groups, discover local events, and connect with
            expert coaches in your area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 pt-4">
            <Link href="/community" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#10B981] hover:bg-[#0d9488] text-white h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl font-bold gap-2 hover:scale-105 transition-transform border-none shadow-lg shadow-emerald-500/20">
                <Users className="w-5 h-5" /> Explore Community
              </Button>
            </Link>
            <Link href="/coaches" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 rounded-xl md:rounded-2xl border-white/20 bg-white/10 text-white backdrop-blur-md font-bold gap-2 hover:bg-white/20"
              >
                <Search className="w-5 h-5" /> Find Coaches
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl md:text-3xl font-black dark:text-white">
            Upcoming Events
          </h2>
          <Link
            href="/events"
            className="text-emerald-500 text-sm md:text-base font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {events.map((ev, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-gray-900 rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
                  unoptimized
                />
              </div>

              <div className="p-5 md:p-6 space-y-2 md:space-y-3">
                <div className="text-[10px] md:text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {ev.date}
                </div>
                <h3 className="font-black text-lg md:text-xl dark:text-white group-hover:text-emerald-500 transition-colors">
                  {ev.title}
                </h3>
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-500">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" /> {ev.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COACHES */}
      <section className="space-y-6 md:space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="text-2xl md:text-3xl font-black dark:text-white">
            Featured Coaches
          </h2>
          <Link
            href="/coaches"
            className="text-emerald-500 text-sm md:text-base font-bold flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
          {coaches.map((coach, idx) => (
            <div
              key={idx}
              className="relative aspect-[4/5] md:aspect-[3/4] rounded-2xl md:rounded-3xl overflow-hidden group"
            >
              <Image
                src={coach.image}
                alt={coach.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 p-5 md:p-8 w-full">
                <h3 className="text-xl md:text-2xl font-black text-white">
                  {coach.name}
                </h3>
                <p className="text-emerald-400 text-sm md:text-base font-bold mb-3 md:mb-4">
                  {coach.specialty}
                </p>
                <Link href={`/coaches/${idx + 1}`}>
                  <Button className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-white/20 border font-bold rounded-xl h-10 md:h-11">
                    View Profile
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
