import '../styles/userList.css';
import { useState,useEffect } from "react";
import { useLocation } from "react-router-dom";



const UserList = () => {
    let location = useLocation()
    let [users,setUsers] = useState([])
    useEffect(()=>{
        let fetchUsers = async() =>{
            let response = await fetch("http://localhost:4000/users")
            let data = await response.json();
            setUsers(data);
        }
        fetchUsers();
    },[]);

    

    let handleDelete = (id) =>{
        fetch(`http://localhost:4000/users/${id}`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(users)
        });
        window.location.reload() //reloads the page
    }

    


    return (  
        <div className="userlist">
            <h1>User List</h1>
            <div className="users">
            { users.map((data)=>{
                    return(
                        <div className="list">
                        <h4>Fname:{data.fname}</h4>
                        <h4>Lname:{data.lname}</h4>
                        <h4>Email:{data.email}</h4>
                        <h4>Phno:{data.phno}</h4>
                        {location.pathname==='/admin-portal/user-list' && <button onClick={()=>handleDelete(data.id)}>Delete</button>}
                        </div>
                        
                        
                    )
                    })};
                    
            </div>

 
            </div>

    );
}
 
export default UserList;
