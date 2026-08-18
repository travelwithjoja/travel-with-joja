
import { useEffect, useState } from "react";
import { Home, Package, PieChart, CreditCard, Settings, Users, Calendar, MapPin, LogOut, BarChart3, Lock } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("twj_admin")==="true");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username==="admin" && password==="1234") {
      localStorage.setItem("twj_admin","true");
      setLoggedIn(true);
    } else alert("Wrong username or password");
  };

  const logout = () => {
    localStorage.removeItem("twj_admin");
    setLoggedIn(false);
  };

  useEffect(()=>{},[]);

  if(!loggedIn){
    return (
      <section className="min-h-screen bg-[#061510] flex items-center justify-center p-6">
        <div className="bg-[#0D241C] border border-[#D4AF37]/30 rounded-3xl p-8 w-full max-w-md shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="bg-[#D4AF37]/20 p-4 rounded-full">
              <Lock className="text-[#D4AF37]" size={36}/>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-center text-[#D4AF37] mb-2">Travel With Joja</h1>
          <p className="text-center text-gray-400 mb-8">Admin Dashboard Login</p>
          <div className="space-y-4">
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" className="w-full bg-[#061510] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white"/>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="w-full bg-[#061510] border border-[#D4AF37]/30 rounded-xl px-4 py-3 text-white"/>
            <button onClick={login} className="w-full bg-[#D4AF37] text-black font-bold py-3 rounded-xl hover:bg-yellow-400">Login</button>
          </div>
          <p className="text-center text-gray-500 text-sm mt-5">Demo: admin / 1234</p>
        </div>
      </section>
    );
  }

  const menu = [
    ["dashboard","Dashboard",Home],
    ["packages","Packages",Package],
    ["analytics","Analytics",PieChart],
    ["payments","Payments",CreditCard],
    ["settings","Settings",Settings]
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-[#070b12] to-[#140808] text-white flex">
      <aside className="w-64 bg-black/40 backdrop-blur-xl border-r border-[#D4AF37]/20 p-6 hidden lg:flex flex-col">
        <h2 className="text-3xl font-bold text-[#D4AF37] mb-10">Travel With Joja</h2>
        <div className="space-y-2">
          {menu.map(([key,label,Icon])=>(
            <button key={key} onClick={()=>setActiveTab(key)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition ${activeTab===key?"bg-[#D4AF37] text-black font-bold":"hover:bg-white/10"}`}>
              <Icon size={20}/><span>{label}</span>
            </button>
          ))}
        </div>
        <button onClick={logout} className="mt-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500 hover:bg-red-600">
          <LogOut size={20}/> Logout
        </button>
      </aside>

      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-[#D4AF37]">Travel With Joja Admin</h1>
          <button onClick={logout} className="lg:hidden bg-red-500 px-4 py-2 rounded-xl flex items-center gap-2"><LogOut size={18}/>Logout</button>
        </div>

        {activeTab==="dashboard" && (
          <>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
              {[
                [Users,"Total Bookings","24"],
                [Calendar,"Today's Bookings","5"],
                [MapPin,"Top Destination","Sigiriya"],
                [BarChart3,"Revenue","$12,400"]
              ].map(([Icon,title,value],i)=>(
                <div key={i} className="bg-[#07241C] border border-[#D4AF37]/30 rounded-3xl p-6">
                  <Icon className="text-[#D4AF37] mb-3" size={28}/>
                  <p className="text-gray-300">{title}</p>
                  <h2 className="text-3xl font-bold mt-2">{value}</h2>
                </div>
              ))}
            </div>
            <div className="bg-[#07241C] border border-[#D4AF37]/20 rounded-3xl p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Bookings</h2>
              <table className="w-full">
                <thead className="text-[#D4AF37]">
                  <tr><th className="text-left pb-3">Guest</th><th className="text-left pb-3">Tour</th><th className="text-left pb-3">Status</th></tr>
                </thead>
                <tbody>
                  {[
                    ["John Smith","Luxury Tour","Confirmed"],
                    ["Emma","South Tour","Pending"],
                    ["Akira","Wildlife Tour","Confirmed"]
                  ].map((r,i)=>(
                    <tr key={i} className="border-t border-white/10">
                      <td className="py-3">{r[0]}</td>
                      <td>{r[1]}</td>
                      <td><span className={`px-3 py-1 rounded-full text-sm ${r[2]==="Confirmed"?"bg-green-500/20 text-green-400":"bg-yellow-500/20 text-yellow-400"}`}>{r[2]}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}

        {activeTab==="packages" && <div className="bg-[#07241C] rounded-3xl p-6 border border-[#D4AF37]/20"><div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-bold">Tour Packages</h2><button className="bg-[#D4AF37] text-black px-5 py-3 rounded-xl font-bold">+ Add Package</button></div></div>}
        {activeTab==="analytics" && <div className="bg-[#07241C] rounded-3xl p-6 border border-[#D4AF37]/20"><h2 className="text-2xl font-bold">Analytics</h2></div>}
        {activeTab==="payments" && <div className="bg-[#07241C] rounded-3xl p-6 border border-[#D4AF37]/20"><h2 className="text-2xl font-bold">Payments</h2></div>}
        {activeTab==="settings" && <div className="bg-[#07241C] rounded-3xl p-6 border border-[#D4AF37]/20"><h2 className="text-2xl font-bold">Settings</h2></div>}
      </main>
    </section>
  );
}
