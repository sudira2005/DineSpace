import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { getRestaurants } from "../../services/restaurantService";

function Restaurants() {
  const [restaurants,setRestaurants]=useState([]); const [loading,setLoading]=useState(true); const [error,setError]=useState("");
  useEffect(()=>{ getRestaurants().then(setRestaurants).catch(e=>setError(e.response?.data?.message||"Unable to load restaurants")).finally(()=>setLoading(false)); },[]);
  return <><Navbar/><main style={{padding:"120px 8% 80px",minHeight:"70vh",background:"#f8f8f8"}}><h1>Restaurants</h1>{loading&&<p>Loading...</p>}{error&&<p style={{color:"crimson"}}>{error}</p>}<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:24}}>{restaurants.map(r=><article key={r._id} style={{background:"white",padding:18,borderRadius:12}}><img src={r.image} alt={r.name} style={{width:"100%",height:180,objectFit:"cover",borderRadius:10}}/><h2>{r.name}</h2><p>{r.location} • {r.cuisine} • ⭐ {r.rating}</p><Link to={`/restaurant/${r._id}`}>View details</Link></article>)}</div></main><Footer/></>;
}
export default Restaurants;
