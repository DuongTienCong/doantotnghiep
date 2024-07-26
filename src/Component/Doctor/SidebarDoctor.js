import React from 'react'
import logo from '../../asset/image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faCalendar , faComment , faWallet , faPlus , faClock ,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../../asset/css/SidebarDoctor.css'


function SidebarDoctor() {
  return (
    <>
    <div className='sidebar'>
        <div className='sidebar-logo'>
            <img src={logo}></img>
        </div>
        <ul className='sidebar-links'>
            <li><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon><a href='#'> &nbsp; Trang chủ</a></li>
            <li><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><a href='#'> &nbsp; Appointment</a></li>
            <li><FontAwesomeIcon icon={faComment}></FontAwesomeIcon><a href='#'> &nbsp; Hỗ trợ</a></li>
            <li><FontAwesomeIcon icon={faWallet}></FontAwesomeIcon><a href='#'> &nbsp; Ví</a></li>
            <li><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon><a href='#'> &nbsp; Dịch vụ y tế</a></li>
        </ul>
        <div className='spacer'>
            <li><FontAwesomeIcon icon={faClock}></FontAwesomeIcon><a href='#'> &nbsp; Liên hệ bảo trì</a></li>
            <li><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon><a href='#'> &nbsp; Đăng xuất</a></li>
        </div>
    </div>
    </>
  )
}

export default SidebarDoctor

