
import { Routes, Route } from "react-router-dom";
import BecomeAPartner from "./componet/BecomeAPartner";
import Header from "./componet/header";
import Homepage from "./pages/HomePage";
import Livetrack from "./pages/livetrack";
import { useState } from "react";

function App() {
const [modalIsOpen, setModalisOpen]= useState(false)

  function Show() {
    console.log('jfgfhfghfg');
    setModalisOpen(true)
}
 return(
 <div>
  {modalIsOpen &&  <BecomeAPartner/>}
  <Header onClick={Show}/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/live-track" element={<Livetrack/>}/>


  </Routes>
   
 </div>
 )
}

export default App;
