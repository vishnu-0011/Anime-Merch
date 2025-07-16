import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Register from './pages/Register';
import Profile from './pages/Profile';
import Forget from './pages/Forget';
import Logout from './pages/Logout';
import Usestate from './component/usestate/Usestate';
import AdminLayout from './component/usenavigate/Usenavigate';


function App() {
  return (   <BrowserRouter>
     <div className="App">
      <Navbar/>
      <div className="main">
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/upload' element={<Register/>}/>
        <Route path='/prof' element={<Profile/>}/>
        <Route path='/ust' element={<Usestate/>}/>
        <Route path='/usn' element={<AdminLayout/>}/>
        <Route path='/forgot' element={<Forget/>}/>
        <Route path='/logout' element={<Logout/>}/>

      </Routes>
      </div>
      
      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
