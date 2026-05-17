
import NavBar from "./components/NavBar";
import { Routes,Route,Link} from "react-router-dom";
import Home from "./pages/Home";
import CollectionPage from "./pages/CollectionPages";
import { ToastContainer } from "react-toastify";
export default function App() {
  return (
    <div className=" text-white w-full bg-gray-900">
       <Link to={'/'}><NavBar/></Link>
      <Routes>
        <Route path="/"  element={<Home/>}/>
        <Route path="collection" element={<CollectionPage/>}/>
      </Routes>
      
      <ToastContainer/>
      
    
    </div>
  );
}
