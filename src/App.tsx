import { useState } from "react";
import {
  Menu,
  X,
  MapPin,
  Star,
  Phone,
  ChevronDown,
} from "lucide-react";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  if (window.location.pathname.endsWith("/admin")) {
    return <AdminDashboard />;
  }

  const [open, setOpen] = useState(false);

  const destinations = [
    {
      name: "Sigiriya",
      image:
        "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1200",
    },
    {
      name: "Ella",
      image:
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200",
    },
    {
      name: "Mirissa",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    },
    {
      name: "Yala",
      image:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200",
    },
    {
      name: "Galle",
      image:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200",
    },
    {
      name: "Nuwara Eliya",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
    },
  ];

  return (
    <div className="bg-[#04120d] text-white min-h-screen">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/40 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-yellow-400">
            Travel With Joja
          </h1>

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-yellow-400">Home</a>
            <a href="#destinations" className="hover:text-yellow-400">Destinations</a>
            <a href="#packages" className="hover:text-yellow-400">Packages</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black/90 px-6 pb-5 space-y-3">
            <a href="#home" className="block">Home</a>
            <a href="#destinations" className="block">Destinations</a>
            <a href="#packages" className="block">Packages</a>
            <a href="#contact" className="block">Contact</a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1800"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 px-6 max-w-3xl">
          <p className="text-yellow-400 uppercase tracking-[6px] mb-4">
            Luxury Sri Lanka Tours
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            Explore Sri Lanka in Luxury
          </h1>

          <p className="text-gray-300 mt-6 text-lg">
            Private Chauffeur • Luxury Hotels • VIP Experiences
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4 mt-10">
            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Book Your Journey
            </button>

            <button className="bg-green-600 px-8 py-4 rounded-full font-bold hover:bg-green-500 transition flex items-center justify-center gap-2">
              <Phone size={18} />
              WhatsApp
            </button>
          </div>
        </div>

        <ChevronDown className="absolute bottom-10 animate-bounce text-yellow-400" />
      </section>

      {/* DESTINATIONS */}
      <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 uppercase tracking-[4px]">
            Popular Destinations
          </p>

          <h2 className="text-4xl font-bold mt-3">
            Discover Paradise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((item) => (
            <div
              key={item.name}
              className="group overflow-hidden rounded-3xl bg-[#0b241d] border border-yellow-500/20 hover:border-yellow-400 transition"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-yellow-400 mb-2">
                  <MapPin size={18} />
                  {item.name}
                </div>

                <p className="text-gray-400 text-sm">
                  Experience luxury travel, breathtaking landscapes and unforgettable memories.
                </p>

                <button className="mt-5 w-full bg-yellow-400 text-black py-3 rounded-xl font-bold hover:bg-yellow-300">
                  Explore Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 px-6 bg-[#071812]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-yellow-400 uppercase tracking-[4px]">
              Why Choose Us
            </p>

            <h2 className="text-4xl font-bold mt-3">
              Premium Travel Experience
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Luxury Hotels",
              "Private Chauffeur",
              "24/7 Support",
              "Best Local Guides",
            ].map((text) => (
              <div
                key={text}
                className="bg-[#0b241d] rounded-3xl border border-yellow-500/20 p-8 text-center hover:border-yellow-400 transition"
              >
                <Star className="mx-auto text-yellow-400 mb-4" />
                <h3 className="font-bold">{text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-yellow-500/20 py-10 text-center"
      >
        <h3 className="text-2xl font-bold text-yellow-400">
          Travel With Joja
        </h3>

        <p className="text-gray-400 mt-2">
          Luxury Travel Experiences Across Sri Lanka
        </p>

        <p className="text-sm text-gray-500 mt-6">
          © 2026 Travel With Joja. All Rights Reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/94770000000"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 p-4 rounded-full shadow-2xl"
      >
        <Phone />
      </a>
    </div>
  );
}
