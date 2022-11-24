import "./Homepage.scss";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import SideIcons from "../../components/side-icons/SideIcons";
import { useState } from "react";


const Homepage = () => {
  const [open, setOpen] = useState(false) 
  const handleOpen= ()=>{
    setOpen((prev)=>!prev)
  }
  return (
    <>
    <Header onClickBar={handleOpen} />
    <div className="homeContainer"> 

        {open ? <Sidebar /> : <SideIcons />} 
      
        <Rightbar />
      </div>
    </>
  )
}

export default Homepage