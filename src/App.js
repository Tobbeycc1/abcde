
import { Routes, Route } from "react-router-dom";
import Header from "./componet/header";
import Homepage from "./pages/HomePage";
import Livetrack from "./pages/livetrack";

function App() {
 return(
 <div>
  <Header/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/live-track" element={<Livetrack/>}/>


  </Routes>
   
 </div>
 )
}

export default App;
