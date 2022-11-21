import { Link } from "react-router-dom"

const Home = () => {
    return ( 
        <div className="home">
            
            <div className="container">
            <h1>Welcome to Library</h1>
            <div className="admin">
            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" alt="" />
            <button><Link to="/admin-login"> Admin  </Link></button>
           </div>
            <div className="user">
           <img src="https://cdn.pixabay.com/photo/2016/04/15/18/05/computer-1331579__340.png" alt="" />
            <button><Link to="/user-login"> User  </Link> </button>
            </div>
            </div>
            


        </div>
     );
}
 
export default Home;