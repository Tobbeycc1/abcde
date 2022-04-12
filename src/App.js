
import { Routes, Route } from "react-router-dom";
import BecomeAPartner from "./componet/BecomeAPartner";
import Header from "./componet/header";
import Homepage from "./pages/HomePage";
import Livetrack from "./pages/livetrack";
import { useState } from "react";

function App() {
const [modalIsOpen, setModalisOpen]= useState(false)

  function ShowModal() { 
    
    console.log('Showing');
    setModalisOpen(!modalIsOpen)
    
}

function DontShowModal() { 
    
  console.log('Notshowing');
  setModalisOpen(false)
}

 return(
 <div>
  {modalIsOpen &&  <BecomeAPartner onClick={DontShowModal}/>
  }
  <Header onBecomeAPartnerClick={ShowModal} onHomeClick={DontShowModal} onLiveTrackClick={DontShowModal} onPartnerClick={DontShowModal} onContactClick={DontShowModal} onRequestTMClick={DontShowModal}/>
  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/live-track" element={<Livetrack/>}/>


  </Routes>
   
 </div>
 )
}

export default App;
