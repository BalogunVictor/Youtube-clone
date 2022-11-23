import "./Homepage.scss";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/Rightbar/Rightbar";
import SideIcons from "../../components/side-icons/SideIcons";


const Homepage = ({menu}) => {
  return (
    <>
    <Header />
    <div className="homeContainer"> 

        {menu ? <Sidebar /> : <SideIcons />} 
      
        <Rightbar />
      </div>
    </>
  )
}

export default Homepage