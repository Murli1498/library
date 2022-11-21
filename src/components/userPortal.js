import SideBar1 from '../components/SideBar1';
import UserHome from '../components/userHome';
import '../styles/userPortal.css';
import {Routes,Route} from "react-router-dom"
import BookList from "./bookList";

const UserPortal = () => {
    return (
        <div className="userportal">
            <SideBar1/>
             <Routes>
             <Route path="/" element={<UserHome/>}/>
            <Route path="/book-list1" element={<BookList/>}/>
            </Routes>
        </div>
      );
}
 
export default UserPortal;