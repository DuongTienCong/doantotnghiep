import React from 'react'
import '../../asset/css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../asset/image/logo.png'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-contact-info'>
          <p><FontAwesomeIcon icon={faEnvelope}/> &nbsp; Email: duongcong11022000@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> &nbsp;  Hotline: 0389219213</p>
          {/* <a href='#'><FontAwesomeIcon icon={faUser} /> Đăng nhập</a> */}
          <Link to="/Login"><FontAwesomeIcon icon={faUser}></FontAwesomeIcon> &nbsp;  Đăng nhập</Link>
        </div>
      </div>
      <div className='header-navbar'>
        <div className='header-navbar-brand'>
          <img src={logo} className='header-navbar-logo' alt='logo' />
        </div>
        <div className='header-navbar-links'>
          <Link to="/">TRANG CHỦ </Link>
          <a href='#'>GÓI SẢN PHẨM</a>
          <a href='#'>BẢNG GIÁ DỊCH VỤ</a>
          <a href='#'>CHUYÊN KHOA</a>
          <a href='#'>TIN TỨC</a>
          <a href='#'>KẾT QUẢ BỆNH NHÂN</a>
        </div>
      </div>
    </>
  )
}
export default Header