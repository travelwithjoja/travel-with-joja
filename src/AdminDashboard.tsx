import { useEffect, useState } from "react";
import {
  Home,
  Package,
  PieChart,
  CreditCard,
  Settings,
  Users,
  Calendar,
  MapPin,
  LogOut,
  BarChart3,
  Lock,
} from "lucide-react";
const [activeTab, setActiveTab] = useState("dashboard");
const [loggedIn, setLoggedIn] = useState(
  localStorage.getItem("twj_admin") === "true"
);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
<section className="min-h-screen bg-gradient-to-br from-black via-[#070b12] to-[#140808] text-white flex">

  <aside className="w-64 bg-black/40 border-r border-yellow-500/20 p-6 hidden lg:flex flex-col">
    <h2 className="text-3xl font-bold text-yellow-400 mb-8">
      Travel With Joja
    </h2>

    {[
      ["dashboard", Home],
      ["packages", Package],
      ["analytics", PieChart],
      ["payments", CreditCard],
      ["settings", Settings],
    ].map(([tab, Icon]) => (
      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-2 transition ${
          activeTab === tab
            ? "bg-yellow-500 text-black font-bold"
            : "hover:bg-white/10"
        }`}
      >
        <Icon size={20} />
        {tab}
      </button>
    ))}

    <button
      onClick={() => {
        localStorage.removeItem("twj_admin");
        setLoggedIn(false);
      }}
      className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600"
    >
      <LogOut size={20} />
      Logout
    </button>
  </aside>

  <main className="flex-1 p-8">
    <h1 className="text-4xl font-bold text-yellow-400 mb-8">
      Travel With Joja Admin
    </h1>

    {activeTab === "dashboard" && (
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-[#07241C] border border-yellow-500/30 rounded-3xl p-6">
          <Users className="text-yellow-400 mb-3" />
          <p>Total Bookings</p>
          <h2 className="text-4xl font-bold">24</h2>
        </div>

        <div className="bg-[#07241C] border border-yellow-500/30 rounded-3xl p-6">
          <Calendar className="text-yellow-400 mb-3" />
          <p>Today's Bookings</p>
          <h2 className="text-4xl font-bold">5</h2>
        </div>

        <div className="bg-[#07241C] border border-yellow-500/30 rounded-3xl p-6">
          <MapPin className="text-yellow-400 mb-3" />
          <p>Top Destination</p>
          <h2 className="text-2xl font-bold">Sigiriya</h2>
        </div>

        <div className="bg-[#07241C] border border-yellow-500/30 rounded-3xl p-6">
          <BarChart3 className="text-yellow-400 mb-3" />
          <p>Revenue</p>
          <h2 className="text-4xl font-bold">$12,400</h2>
        </div>
      </div>
    )}

    {activeTab === "packages" && (
      <div className="bg-[#07241C] rounded-3xl p-6">
        <h2 className="text-2xl font-bold mb-4">Tour Packages</h2>
        <button className="bg-yellow-500 text-black px-5 py-3 rounded-xl font-bold">
          + Add Package
        </button>
      </div>
    )}

    {activeTab === "analytics" && (
      <div className="bg-[#07241C] rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Analytics</h2>
        <p className="text-gray-300 mt-3">
          Booking charts මෙතන දාමු.
        </p>
      </div>
    )}

    {activeTab === "payments" && (
      <div className="bg-[#07241C] rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Payments</h2>
      </div>
    )}

    {activeTab === "settings" && (
      <div className="bg-[#07241C] rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Settings</h2>
      </div>
    )}
  </main>
</section>
