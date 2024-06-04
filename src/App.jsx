import Home from "./pages/home/Home.jsx";
import Topbar from "../src/components/topbar/topbar.jsx";
import { Route, Routes } from "react-router-dom";
import Write from '../src/pages/write/Write.jsx'
import Settings from '../src/pages/settings/Settings.jsx'
import Register from  '../src/pages/register/Register.jsx'
import Single from  '../src/pages/single/Single.jsx'
import Login from "../src/pages/login/Login.jsx";



function App() {
  return (
    <>
      <Topbar />
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/write" element={<Write />} />
         <Route path="/settings" element={<Settings />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
         <Route path="/single" element={<Single />} />
      </Routes>
    </>
  );
}

export default App;