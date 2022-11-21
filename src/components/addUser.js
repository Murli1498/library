import '../styles/addUser.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddUser = () => {
    let[fname ,setfname]=useState('')
    let[lname ,setlname]=useState('')
    let[email ,setemail]=useState('')
    let[phno ,setphno]=useState('')    
    
 
    const navigate = useNavigate();

    let handleSubmit = (e) =>{
        e.preventDefault()
        let addusers={
            fname:fname
            ,lname:lname
            ,email:email
            ,phno:phno
        }
        fetch(" http://localhost:4000/users",{
            method:"POST",
            headers:{"content-type":"application/json;charset=utf-8"}
            ,body:JSON.stringify(addusers)
        });
        alert("added to User List")
        navigate("/admin-portal/user-list")
    };

    return ( 
        <div className="adduser">
            <form action="" id="add" onSubmit={handleSubmit}>
                <label htmlFor="fname"> <h1>Fname</h1> <br /> <input class="" type="text" placeholder="Fname" aria-label="fname" value={fname} onChange={(e)=>setfname(e.target.value)} /></label><br />
                <label htmlFor="lname"><h1>Lname</h1><br /> <input class="" type="text" placeholder="Lname" aria-label="lname" value={lname} onChange={(e)=>setlname(e.target.value)} /></label><br />
                <label htmlFor="email"><h1>Email</h1> <br /><input class="" type="email"  placeholder="Email" aria-label="email" value={email} onChange={(e)=>setemail(e.target.value)} /></label><br />
                <label htmlFor="phno"><h1>Phno</h1> <br /> <input class="" type="number" placeholder="Phno" aria-label="phno" value={phno} onChange={(e)=>setphno(e.target.value)} /></label>
    
                <div className="but">
                    <button onClick="">Add </button>
                </div>
                </form>
  
        </div>
     );
}
 
export default AddUser;