import '../styles/adminLogin.css';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from "react-router-dom"

const AdminLogin = (props) => {
    
let [email,setEmail] = useState('')
let [password,setPassword] = useState('')

let  navigate = useNavigate()

let handleSubmit = () =>{
    if( (email === props.data) && (password === "admin")){
     navigate("/admin-portal")
    }else{
        alert("Invalid Credentials")
    }
}
    return ( 
        <section className="adminLogin">
            <div className="card">
            <h1>Admin Login</h1>
            <form action='' onSubmit={handleSubmit}>
                <label htmlFor="">Admin Mail</label>
                <br />
                <input type="email" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)} /><br />
                <button id="btn1">LogIn</button>
                <button id="btn2"><Link to="/">Home</Link></button>
            </form>
            </div>
        </section>
     );
}
 
export default AdminLogin;