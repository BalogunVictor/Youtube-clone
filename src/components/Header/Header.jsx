import "./Header.scss"
import { BsSearch } from 'react-icons/bs';
import { HiMenu } from 'react-icons/hi';
import { MdVideocam } from 'react-icons/md';
import {GrApps} from 'react-icons/gr';
import {MdNotifications} from 'react-icons/md';
import {MdAccountCircle} from 'react-icons/md'

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <span><HiMenu>menu</HiMenu></span>
        <img
          src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
          alt=""
        />
      </div>

      <div className="headerSearch">
        <form action="">
          <input type="text" placeholder="Search" />
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