import "./Rightbar.scss"
import Video from "../Video/Video"
import {Videos} from "../../data"
// import Slide from "../Slide/Slide"


const Rightbar = () => {

  return (
    <div className="rightbar">
    <h1>Recommended</h1>
    {/*<Slide />*/}
    <div className="rightbarWrapper">
    {
      Videos.map((v) => (
        <Video key={v.id} video={v}/>
      ))
    }
    </div>
    </div>
  )
} 

export default Rightbar