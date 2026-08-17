
import {useState} from "react";
export default function AdminDashboard(){
 const [tab,setTab]=useState("dashboard");
 return (
 <div style={{padding:20,color:"white",background:"#0b0b10",minHeight:"100vh"}}>
  <h1>Travel With Joja Admin V2</h1>
  <div style={{display:"flex",gap:10}}>
   {["dashboard","packages","analytics","payments","settings"].map(t=>
    <button key={t} onClick={()=>setTab(t)}>{t}</button>)}
  </div>
  <h2>{tab}</h2>
 </div>);
}
