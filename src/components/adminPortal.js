import SideBar from "../components/sideBar";
import AdminHome from "../components/adminHome";
import "../styles/adminPortal.css";
import {Routes,Route} from "react-router-dom"
import BookList from "./bookList";
import UserList from "./userList";
import AddBook  from "./addBooks";
import AddUser from "./addUser";


const AdminPortal = (props) => {
  return (
    <div className="adminPortal">
      <SideBar data={props.data} />
      <Routes>
        <Route path="/" element={<AdminHome/>}/>
        <Route path="/book-list" element={<BookList/>}/>
        <Route path="/user-list" element={<UserList/>}/>
        <Route path="/add-books" element={<AddBook/>}/>
        <Route path="/add-user" element={<AddUser/>}/>

      </Routes>
      
    </div>
  );
};

export default AdminPortal;
