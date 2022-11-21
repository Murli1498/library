import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/home';
import AdminLogin from './components/adminLogin';
import UserLogin from './components/userLogin'; 
import AdminPortal from './components/adminPortal';
import UserPortal from './components/userPortal';



function App() {
  let email = "admin@gmail.com";
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin data={email} />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/admin-portal/*" element={<AdminPortal data={email} />} />
        <Route path="/user-portal/*" element={<UserPortal/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
