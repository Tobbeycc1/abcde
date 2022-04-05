
import { Routes, Route } from "react-router-dom";
import Header from "./componet/header";
import Homepage from "./pages/HomePage";

function App() {
 return(
 <div>
  <Header/>
  <Routes>
    <Route path="/" element={<Homepage/>}/>


  </Routes>
   
 </div>
 )
}

export default App;
