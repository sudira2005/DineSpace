import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const submit = async (e) => {
    e.preventDefault(); setError(''); setLoading(true);
    try { const data = await loginUser(form); navigate(data.user.role === 'admin' ? '/admin' : '/'); }
    catch (err) { setError(err.response?.data?.message || 'Login failed'); }
    finally { setLoading(false); }
  };
  return <div style={{maxWidth:450,margin:'60px auto',padding:30,border:'1px solid #ddd',borderRadius:10}}>
    <h2>Welcome Back</h2>{error && <p style={{color:'crimson'}}>{error}</p>}
    <form onSubmit={submit}><input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required style={{width:'100%',padding:10,margin:'10px 0',boxSizing:'border-box'}}/>
    <input type="password" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required style={{width:'100%',padding:10,margin:'10px 0',boxSizing:'border-box'}}/>
    <button disabled={loading} style={{width:'100%',padding:12,background:'#d4af37',color:'white',border:0,borderRadius:5}}>{loading?'Logging in...':'Login'}</button></form>
    <p style={{textAlign:'center'}}>Don't have an account? <Link to="/register">Register</Link></p>
  </div>;
}
export default Login;
