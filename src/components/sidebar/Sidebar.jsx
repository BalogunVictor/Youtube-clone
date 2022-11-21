import './sidebar.scss'
import {IoMdHome,IoMdThumbsUp} from "react-icons/io"
import {BsFillPlayFill} from "react-icons/bs"
import {MdOutlineLocalFireDepartment,
  MdSubscriptions,
  MdLibraryAddCheck,
  MdHistory,MdWatchLater} from "react-icons/md"
const Sidebar = () => {
  return (

        <div className='sidebar'>
          <div className='sidebarWrapper'>
            <ul className='sidebarList'>
              <li className='sidebarListItem'>
                <IoMdHome className='sidebarIcon'/>
                <span className='sidebarListItemText'>Home</span>
              </li>
            </ul>
            <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MdOutlineLocalFireDepartment className='sidebarIcon'/>
              <span className='sidebarListItemText'>Trending</span>
            </li>
          </ul>
          <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <MdSubscriptions className='sidebarIcon'/>
            <span className='sidebarListItemText'>Subcriptions</span>
          </li>
        </ul>
        <hr />
        <ul className='sidebarList'>
        <li className='sidebarListItem'>
          <MdLibraryAddCheck className='sidebarIcon'/>
          <span className='sidebarListItemText'>Library</span>
        </li>
      </ul>
      <ul className='sidebarList'>
      <li className='sidebarListItem'>
        <MdHistory className='sidebarIcon'/>
        <span className='sidebarListItemText'>History</span>
      </li>
    </ul>
    <ul className='sidebarList'>
    <li className='sidebarListItem'>
      <BsFillPlayFill className='sidebarIcon'/>
      <span className='sidebarListItemText'>Your Videos</span>
    </li>
    </ul>
    <ul className='sidebarList'>
    <li className='sidebarListItem'>
      <MdWatchLater className='sidebarIcon'/>
      <span className='sidebarListItemText'>Watch Later</span>
    </li>
    </ul>
    <ul className='sidebarList'>
    <li className='sidebarListItem'>
      <IoMdThumbsUp className='sidebarIcon'/>
      <span className='sidebarListItemText'>Liked Videos</span>
    </li>
    </ul>
    <hr className='sidebarHr'/>
  
          </div>
        </div>
      )
    }


export default Sidebar