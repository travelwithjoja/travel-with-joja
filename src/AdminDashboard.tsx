import { useState } from "react";
import {
  Home,
  Package,
  PieChart,
  CreditCard,
  Settings,
  Users,
  Calendar,
  MapPin,
  Bell,
  LogOut,
  BarChart3,
} from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#070b12] to-[#140808] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-[#D4AF37]/20 p-6 hidden lg:flex flex-col">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-10">
          Travel With Joja
        </h2>

        <nav className="space-y-3">
          {[
            ["dashboard", Home],
            ["packages", Package],
            ["analytics", PieChart],
            ["payments", CreditCard],
            ["settings", Settings],
          ].map(([name, Icon]) => (
            <button
              key={name}
              onClick={() => setActiveTab(name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                activeTab === name
                  ? "bg-gradient-to-r from-red-600 to-pink-600"
                  : "hover:bg-white/10"
              }`}
            >
              <Icon size={20} />
              <span className="capitalize">{name}</span>
            </button>
          ))}
        </nav>

        <button className="mt-auto flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 py-3 rounded-xl transition">
          <LogOut size={18} />
          Logout
        </button>
      </aside>

      {/* Main */}
      <div className="flex-1 p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-5xl font-bold text-white">
              Travel With Joja
            </h1>
            <p className="text-gray-400 mt-2">Premium Admin Dashboard</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-white/5 border border-[#D4AF37]/20">
              <Bell className="text-[#D4AF37]" />
            </div>

            <button className="bg-gradient-to-r from-red-600 to-pink-600 px-5 py-3 rounded-xl hover:scale-105 transition">
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <>
            <div className="grid md:grid-cols-4 gap-6">

              <div className="bg-[#081b14] border border-[#D4AF37]/30 rounded-3xl p-6">
                <Users className="text-[#D4AF37] mb-4" />
                <p className="text-gray-400">Total Bookings</p>
                <h2 className="text-4xl font-bold">24</h2>
              </div>

              <div className="bg-[#081b14] border border-[#D4AF37]/30 rounded-3xl p-6">
                <Calendar className="text-[#D4AF37] mb-4" />
                <p className="text-gray-400">Today's Bookings</p>
                <h2 className="text-4xl font-bold">6</h2>
              </div>

              <div className="bg-[#081b14] border border-[#D4AF37]/30 rounded-3xl p-6">
                <MapPin className="text-[#D4AF37] mb-4" />
                <p className="text-gray-400">Top Destination</p>
                <h2 className="text-2xl font-bold">Sigiriya</h2>
              </div>

              <div className="bg-[#081b14] border border-[#D4AF37]/30 rounded-3xl p-6">
                <BarChart3 className="text-[#D4AF37] mb-4" />
                <p className="text-gray-400">Revenue</p>
                <h2 className="text-3xl font-bold">$12,400</h2>
              </div>

            </div>

            {/* Recent bookings */}
            <div className="mt-10 bg-black/30 border border-[#D4AF37]/20 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-6">Recent Bookings</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="text-[#D4AF37]">
                    <tr>
                      <th className="text-left py-3">Guest</th>
                      <th className="text-left py-3">Tour</th>
                      <th className="text-left py-3">Date</th>
                      <th className="text-left py-3">Status</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-300">
                    <tr className="border-t border-white/10">
                      <td className="py-4">John Smith</td>
                      <td>Sigiriya Luxury</td>
                      <td>18 Aug</td>
                      <td>
                        <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full">
                          Confirmed
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t border-white/10">
                      <td className="py-4">Emma Brown</td>
                      <td>Yala Safari</td>
                      <td>19 Aug</td>
                      <td>
                        <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                          Pending
                        </span>
                      </td>
                    </tr>

                    <tr className="border-t border-white/10">
                      <td className="py-4">David Lee</td>
                      <td>Ella Train</td>
                      <td>20 Aug</td>
                      <td>
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full">
                          Paid
                        </span>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {/* Other tabs */}
        {activeTab !== "dashboard" && (
          <div className="bg-black/30 border border-[#D4AF37]/20 rounded-3xl p-10 text-center">
            <h2 className="text-3xl font-bold capitalize text-[#D4AF37]">
              {activeTab}
            </h2>
            <p className="text-gray-400 mt-4">
              This premium section is ready for the next features.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
