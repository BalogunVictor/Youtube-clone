import "./Header.scss"
import { BsSearch } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { MdVideocam } from 'react-icons/md';
import {GrApps} from 'react-icons/gr';
import {MdNotifications} from 'react-icons/md';
import {MdAccountCircle} from 'react-icons/md'


const Header = ({onClickBar,onChange}) => {

  
   
  return (
    <div className="header">
      <div className="headerLeft">
        <span ><HiMenu 
        onClick={onClickBar}>

        menu</HiMenu></span>
        <img
          src="https://github.com/kunaal438/youtube-clone/blob/master/img/logo.PNG?raw=trueG"
          alt=""
        />
      </div>

      <div className="headerSearch">
        <form action="">
          <input type="text" placeholder="Search"  onChange={onChange}
           />
          <button><BsSearch>search</BsSearch></button>
        </form>
      </div>

      <div className="headerIcons">
     <span><BsSearch>Search</BsSearch></span> 
     <span><MdVideocam>Videocam</MdVideocam></span> 
     <span><GrApps>Apps</GrApps></span>
     <span><MdNotifications>notifications</MdNotifications></span> 
     <span><MdAccountCircle>account_circle</MdAccountCircle></span>
      </div>
    </div>
  )
}

export default Header