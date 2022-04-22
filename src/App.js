
import { Routes, Route } from "react-router-dom";
import BecomeAPartner from "./componet/BecomeAPartner";
import Header from "./componet/header";
import Homepage from "./pages/HomePage";
import Livetrack from "./pages/livetrack";
import { useState } from "react";
import Partner from "./Partner";
import MediaQuery from 'react-responsive'
import NotLaptop from "./notLaptopMedia";
import classes from './App.module.css'
import Logo from './images/Logo.png'
import ContactPage from "./pages/ContactPage";


function App() {
const [modalIsOpen, setModalisOpen]= useState(false)
const [mobileHeaderIsOpen, setMobileHeaderOpen]= useState(false)

  function ShowModal() { 
    
    console.log('Showing');
    setModalisOpen(!modalIsOpen)
    setMobileHeaderOpen(false)
    
}
function ShowMobileHeader() {
  setMobileHeaderOpen(!mobileHeaderIsOpen)
  
}
function DontShowMobileHeader() {
  setMobileHeaderOpen(false)
  setModalisOpen(false)
}

function DontShowModal() { 
    
  console.log('Notshowing');
  setModalisOpen(false)
}

 return(
 <div>
   
   <MediaQuery minWidth={1000}>
   <Header onBecomeAPartnerClick={ShowModal} onHomeClick={DontShowModal} onLiveTrackClick={DontShowModal} onPartnerClick={DontShowModal} onContactClick={DontShowModal} onRequestTMClick={DontShowModal}/>
   </MediaQuery>

   <MediaQuery maxWidth={999}>
     <div className={classes.notLaptopHeader}>
     <div className={classes.header}>
         <img src={Logo} className={classes.Logo} alt="Logo" />
            <div className={classes.navCon}>
            <p className={classes.hamburgerButton} onClick={ShowMobileHeader}>&#9776;</p>
            </div>
        </div>
        {mobileHeaderIsOpen &&  <NotLaptop onBecomeAPartnerClick={ShowModal} onHomeClick={DontShowMobileHeader} onLiveTrackClick={DontShowMobileHeader} onPartnerClick={DontShowMobileHeader} onContactClick={DontShowMobileHeader} onRequestTMClick={DontShowMobileHeader}/> }
  
     </div>

   </MediaQuery>
 
  {modalIsOpen &&  <BecomeAPartner onClick={DontShowModal}/>
  }
  
  <Routes>
    <Route path="/" element={<Homepage />}/>
    <Route path="/live-track" element={<Livetrack/>}/>
    <Route path="/partner" element={<Partner/>}/>
    <Route path="/contact" element={<ContactPage/>}/>

    
   
  


  </Routes>
  
 
   
 </div>
 )
}

export default App;
