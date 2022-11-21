import '../styles/sidebar1.css'
import { Link } from "react-router-dom"

const SideBar1 = () => {
    return ( 
        <div className="sidebar1">
             <div className="align">
            <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png" alt="" />
            <h5>User</h5>
            </div>
            <div className="text">
            <Link to="/user-portal/">Home</Link>
            <Link to="/user-portal/book-list1">Books List</Link>
            <Link to="/">Logout</Link>

            </div>

        </div>
     );
}
 
export default SideBar1;