import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Home1 from "./Home1";
import Id1 from "./Id1";
import EditProfile from "./pages/EditProfile";
import UseEffect from "./pages/profile/UseEffect";
import Idpage from "./pages/profile/Idpage";
import UseHook from "./pages/UseHook";
function App() {
  return (
    
    <Router>
    
      
        <Routes>
          <Route path="/" element={<Home1 />} />
          

          <Route path="/dashboard" element={<Dashboard />} />
         
         
    
          <Route path="/users" element={<Users />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route exact path="/profile" element={<UseEffect />} />
          <Route exact path="/useHook" element={<UseHook />} />

    <Route  exact path="/idpage"    element={<Idpage />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      
    </Router>
    
  );
}

export default App;
