import { useEffect, useState } from "react";
import { Users, Calendar, MapPin, BarChart3, Lock, LogOut } from "lucide-react";
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
    <section className="min-h-screen bg-[#061510] flex items-center justify-center p-6">
      <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-3xl p-8 w-full max-w-md shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="bg-[#D4AF37]/20 p-4 rounded-full">
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
            className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-black font-bold py-3 rounded-xl transition"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}
  return (
    <section className="min-h-screen bg-[#061510] text-white p-8">
      <div className="flex justify-between items-center mb-8">
  <h1 className="text-4xl font-bold text-[#D4AF37]">
    Travel With Joja Admin
  </h1>

  <button
    onClick={logout}
    className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded-xl"
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
    </section>
  );
}
