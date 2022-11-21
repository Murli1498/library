import '../styles/userLogin.css'
import {Link} from "react-router-dom"
import { useState } from 'react';
import {useNavigate} from "react-router-dom"


const UserLogin = () => {

    let [user,setUser] = useState('')
    let [password,setPassword] = useState('')

    let  navigate = useNavigate()

    let handleSubmit = () =>{
        if( (user === "user123") && (password === "user")){
         navigate("/user-portal")
        }else{
            alert("Invalid Credentials")
        }
    }   
    return (  
        <section className="userLogin">
        <div className="power">
            <h1>User Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">User Id</label><br />
                <input type="text" placeholder='Enter Id'  value={user}  onChange={(e)=>setUser(e.target.value)} /><br />
                <label htmlFor="">Password</label><br />
                <input type="password" placeholder='Password' value={password}  onChange={(e)=>setPassword(e.target.value)} /><br />
                <button id="btn1">LogIn</button>
                <button id="btn2"><Link to="/">Home</Link></button>
            </form>
            </div>
        </section>
    );
}
 
export default UserLogin;