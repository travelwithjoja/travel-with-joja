
{`import { useState } from "react";

const API_URL =
"https://script.google.com/macros/s/AKfycbzssY4a1_U3S9jDYnRPWgm1QJartPXkIdETmM0PUtJi7tXJedArTHANpafx9Twio1NzQ/exec";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelers: 1,
    month: "",
    travelStyle: "",
    specialRequests: "",
    notes: ""
  });

  const submit = async (e: any) => {
    e.preventDefault();

    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    if (data.success) {
      alert("Booking Sent!");
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4 p-6 bg-[#0D241C] rounded-xl">
      <input className="w-full p-3 rounded bg-black text-white" placeholder="Full Name"
        onChange={e => setForm({ ...form, name: e.target.value })} />

      <input className="w-full p-3 rounded bg-black text-white" placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input className="w-full p-3 rounded bg-black text-white" placeholder="Phone"
        onChange={e => setForm({ ...form, phone: e.target.value })} />

      <input className="w-full p-3 rounded bg-black text-white" placeholder="Destination"
        onChange={e => setForm({ ...form, destination: e.target.value })} />

      <button className="bg-[#D4AF37] text-black px-6 py-3 rounded font-bold w-full">
        Book Now
      </button>
    </form>
  );
}`}
