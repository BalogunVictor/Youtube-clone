import "./SideIcons.scss"
import {IoMdHome} from "react-icons/io"

import {MdOutlineLocalFireDepartment,
  MdSubscriptions,
  MdLibraryAddCheck} from "react-icons/md"

const SideIcons = () => {

  return (
    <div className='sidebar'>
    <div className='sidebarWrapper'>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>
          <IoMdHome className='sidebarIcon'/>
        </li>
      </ul>
      <ul className='sidebarList'>
      <li className='sidebarListItem'>
        <MdOutlineLocalFireDepartment className='sidebarIcon'/>
      </li>
    </ul>
    <ul className='sidebarList'>
    <li className='sidebarListItem'>
      <MdSubscriptions className='sidebarIcon'/>
    </li>
  </ul>
  <ul className='sidebarList'>
  <li className='sidebarListItem'>
    <MdLibraryAddCheck className='sidebarIcon'/>
  </li>
</ul>

  </div>
  </div>
)
}


export default SideIcons