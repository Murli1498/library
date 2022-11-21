import '../styles/sideBar.css'
import { Link } from "react-router-dom"





const SideBar = (props) => {
    return (  
        <div className="sidebar">
            <div className="align">
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" alt="" />
            <h5>Admin {props.data}</h5>
            </div>
            <div className="text">
            <Link to="/admin-portal/">Home</Link>
            <Link to="/admin-portal/add-books">  Add Books </Link> 
            <Link to="/admin-portal/book-list">Books List</Link>
            <Link to="/admin-portal/add-user">Add User</Link>
            <Link to="/admin-portal/user-list">User List</Link>
            <Link to="/">Logout</Link>

            </div>
        </div>
    );
}
 
export default SideBar;