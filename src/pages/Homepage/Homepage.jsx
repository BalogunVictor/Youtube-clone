import "./Homepage.scss"
import Header from '../../components/Header/Header'
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/Rightbar/Rightbar"


const Homepage = () => {
  return (
    <>
    <Header />
    <div className="homeContainer"> 
        <Sidebar />
        <Rightbar />
      </div>
    </>
  )
}

export default Homepage