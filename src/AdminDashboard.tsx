import { useEffect, useState } from "react";
import { Users, Calendar, MapPin, BarChart3 } from "lucide-react";
export default function AdminDashboard() {
  const API_URL =
    "https://script.google.com/macros/s/AKfycbzssY4a1_U3S9jDYnRPWgm1QJartPXkqIdETmM0PUtJi7tXJedArTHANpafx9Twio1NzQ/exec";

const [bookings, setBookings] = useState<any[]>([]);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setBookings(data);
    })
    .catch(console.error);
}, []);
  return (
    <section className="min-h-screen bg-[#061510] text-white p-8">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
        Travel With Joja Admin
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-2xl p-6">
          <Users className="text-[#D4AF37] mb-4"/>
          <h3>Total Bookings</h3>
          <h2 className="text-3xl font-bold">{bookings.length}</h2>
        </div>

        <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-2xl p-6">
          <Calendar className="text-[#D4AF37] mb-4"/>
          <h3>Today's Bookings</h3>
          <h2 className="text-3xl font-bold">0</h2>
        </div>

        <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-2xl p-6">
          <MapPin className="text-[#D4AF37] mb-4"/>
          <h3>Top Destination</h3>
          <h2 className="text-xl font-bold">Sigiriya</h2>
        </div>

        <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-2xl p-6">
          <BarChart3 className="text-[#D4AF37] mb-4"/>
          <h3>Travelers</h3>
          <h2 className="text-3xl font-bold">0</h2>
        </div>
      </div>
    </section>
  );
}
