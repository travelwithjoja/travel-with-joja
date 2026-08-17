import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Calendar,
  MapPin,
  Users,
  Package,
  Bell,
  Search,
  Settings,
  LogOut,
  Lock,
  BarChart3,
  Menu,
  Home,
CreditCard,
PieChart,
} from "lucide-react";
export default function AdminDashboard() {
  const API_URL =
    "https://script.google.com/macros/s/AKfycbzssY4a1_U3S9jDYnRPWgm1QJartPXkqIdETmM0PUtJi7tXJedArTHANpafx9Twio1NzQ/exec";
const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("twj_admin") === "true"
);

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");

const login = () => {
  if (username === "admin" && password === "travel123") {
    localStorage.setItem("twj_admin", "true");
    setLoggedIn(true);
  } else {
    alert("Wrong Username or Password");
  }
};

const logout = () => {
  localStorage.removeItem("twj_admin");
  setLoggedIn(false);
};
const [bookings, setBookings] = useState<any[]>([]);

useEffect(() => {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setBookings(data);
    })
    .catch(console.error);
}, []);
  if (!loggedIn) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0f0f14] to-[#1a0a0a] text-white flex">
      <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-3xl p-8 w-full max-w-md shadow-[0_0_40px_rgba(255,0,80,0.25)]">
        <div className="flex justify-center mb-6">
          <div className="bg-red-500/20 p-4 rounded-full shadow-[0_0_20px_rgba(255,0,80,0.5)]">
            <Lock className="text-[#D4AF37]" size={36} />
          </div>
        </div>

        <h1 className="text-3xl font-bold text-center text-[#D4AF37]">
          Travel With Joja
        </h1>

        <p className="text-center text-gray-400 mt-2 mb-8">
          Admin Dashboard Login
        </p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full bg-[#061510] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-[#061510] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white outline-none focus:border-[#D4AF37]"
          />

          <button
            onClick={login}
            className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 py-3 rounded-xl font-semibold transition-all shadow-lg"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#0f0f14] to-[#1a0a0a] text-white flex">
      <aside className="w-64 bg-white/5 backdrop-blur-xl border-r border-red-500/20 p-6 hidden lg:flex flex-col">
  <h2 className="text-2xl font-bold text-white mb-8">
    Travel With Joja
  </h2>

  <nav className="space-y-3">
    <button className="w-full flex items-center gap-3 bg-gradient-to-r from-red-600 to-pink-600 px-4 py-3 rounded-xl">
      <Home size={20}/>
      Dashboard
    </button>

    <button className="w-full flex items-center gap-3 hover:bg-white/10 px-4 py-3 rounded-xl transition">
      <Package size={20}/>
      Packages
    </button>

    <button className="w-full flex items-center gap-3 hover:bg-white/10 px-4 py-3 rounded-xl transition">
      <PieChart size={20}/>
      Analytics
    </button>

    <button className="w-full flex items-center gap-3 hover:bg-white/10 px-4 py-3 rounded-xl transition">
      <CreditCard size={20}/>
      Payments
    </button>

    <button className="w-full flex items-center gap-3 hover:bg-white/10 px-4 py-3 rounded-xl transition">
      <Settings size={20}/>
      Settings
    </button>
  </nav>

  <div className="mt-auto">
    <button
      onClick={logout}
      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl transition"
    >
      <LogOut size={18}/>
      Logout
    </button>
  </div>
</aside>

<div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
  <div>
    <h1 className="text-4xl font-bold text-white">
      Travel With Joja
    </h1>
    <p className="text-gray-400 mt-1">
      Premium Admin Dashboard
    </p>
  </div>

  <div className="flex items-center gap-4">
    <div className="p-3 rounded-full bg-white/5 border border-red-500/20">
      <Bell className="text-red-400" size={20} />
    </div>

    <button
      onClick={logout}
      className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 px-4 py-2 rounded-xl transition shadow-lg"
    >
      <LogOut size={18} />
      Logout
    </button>
  </div>
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
</div>   
</section>
</section>
);
}
