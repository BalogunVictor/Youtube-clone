import "./Homepage.scss";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import SideIcons from "../../components/side-icons/SideIcons";
import { useState } from "react";
import { Videos } from "../../data";


const Homepage = () => {
  
  const [open, setOpen] = useState(false);
  const [searchField , setSearchField] = useState('');

  const onChange = e => setSearchField(e.target.value);
  
 
  const handleOpen= () => {
    setOpen((prev)=>!prev)
  }

  const filteredVideo = Videos.filter( Videos => Videos.title.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
    <Header 
    onClickBar={handleOpen} 
    onChange={onChange}
    />
    <div className="homeContainer"> 

        {open ? <SideIcons />  : <Sidebar />} 
      
        <Rightbar filteredVideo={filteredVideo}/>
      </div>
    </>
  )
}

export default Homepage