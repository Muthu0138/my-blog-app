import Home from "./pages/home/Home.jsx";
import Topbar from "../src/components/topbar/topbar.jsx";
import { Route, Routes } from "react-router-dom";
import Write from "../src/pages/write/Write.jsx"

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Write/>} />
      </Routes>
    </>
  );
}

export default App;