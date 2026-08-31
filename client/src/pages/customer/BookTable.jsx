import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getRestaurants } from '../../services/restaurantService';
import { createReservation } from '../../services/reservationService';

function BookTable() {
  const navigate = useNavigate(); const [params] = useSearchParams();
  const [restaurants,setRestaurants]=useState([]); const [form,setForm]=useState({restaurant:params.get('restaurant')||'',date:'',time:'',guests:2,notes:''}); const [message,setMessage]=useState('');
  useEffect(()=>{getRestaurants().then(setRestaurants).catch(()=>setMessage('Please log in to continue.'));},[]);
  const submit=async e=>{e.preventDefault();setMessage('');try{await createReservation(form);setMessage('Reservation created successfully.');setTimeout(()=>navigate('/my-reservations'),600);}catch(err){setMessage(err.response?.data?.message||'Could not create reservation.');}};
  return <main style={{maxWidth:600,margin:'100px auto',padding:30}}><h1>Book a Table</h1>{message&&<p>{message}</p>}<form onSubmit={submit} style={{display:'grid',gap:12}}><select required value={form.restaurant} onChange={e=>setForm({...form,restaurant:e.target.value})}><option value="">Select restaurant</option>{restaurants.map(r=><option key={r._id} value={r._id}>{r.name}</option>)}</select><input type="date" required value={form.date} onChange={e=>setForm({...form,date:e.target.value})}/><input type="time" required value={form.time} onChange={e=>setForm({...form,time:e.target.value})}/><input type="number" min="1" max="50" required value={form.guests} onChange={e=>setForm({...form,guests:Number(e.target.value)})}/><textarea placeholder="Notes" value={form.notes} onChange={e=>setForm({...form,notes:e.target.value})}/><button style={{padding:12}}>Confirm Reservation</button></form></main>;
}
export default BookTable;
