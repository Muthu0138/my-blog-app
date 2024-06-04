import Home from "./pages/home/Home.jsx";
import Topbar from "../src/components/topbar/topbar.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;