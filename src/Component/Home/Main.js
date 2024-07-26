import React from 'react'
import background from '../../asset/image/background.png'
import '../../asset/css/Main.css'
import anh1 from '../../asset/image/anh1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import anh2 from '../../asset/image/anh2.png'
import anh3 from '../../asset/image/anh3.png'
import anh4 from '../../asset/image/anh4.png'
import anh5 from '../../asset/image/anh5.png'
import anh6 from '../../asset/image/anh6.png'
import anh7 from '../../asset/image/anh7.png'
import anh8 from '../../asset/image/anh8.png'
import anh12 from '../../asset/image/anh12.png'
import anh10 from '../../asset/image/anh10.png'
import anh11 from '../../asset/image/anh11.png'

function Main() {
  return (
   <>
   <div className='main'>
    <div className='main-background'>
        <img src={background} className='main-background-img'></img>
    </div>
    <h1>Gói khám nổi bật </h1>
     <div className='main-item1'>
     <div className='main-item'>
        <img src={anh1} className='main-item-img'></img>
        <h2>Khám tổng quát nam</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh da liễu cho nam giới</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh2} className='main-item-img'></img>
        <h2>Khám tổng quát nữ</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh da liễu cho nữ giới</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh3} className='main-item-img'></img>
        <h2>Khám tổng quát tim</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh đường tim mạch</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh4} className='main-item-img'></img>
        <h2>Khám tổng quát phổi</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh đường hô hấp và phổi</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>
     </div>

     <div className='main-item2'>
     <div className='main-item'>
        <img src={anh5} className='main-item-img'></img>
        <h2>Khám tổng quát thận</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh thận và đường tiểu</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh6} className='main-item-img'></img>
        <h2>Khám tổng quát gan</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh gan và mỡ máu</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh7} className='main-item-img'></img>
        <h2>Khám tổng quát dạ dày</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh dạ dày và tiêu hóa</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>

    <div className='main-item'>
        <img src={anh8} className='main-item-img'></img>
        <h2>Khám tổng quát bao tử</h2>
        <p>Gía:<span className='main-price'>5,480,000vnđ</span></p>
        <p>Chuyên khoa tư vấn về các bệnh đường ruột và máu</p>
        <div className='main-item-icon'>
          <ul>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
            <li><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></li>
           </ul>
        </div>
        <button className='main-oder-button'>Đặt ngay</button>
    </div>
     </div>
     <h1>Tin tức mới nhất</h1> 
      <div className='item-news'>
          <div className='news-content'>
          <img src={anh10} className='news-img'></img>
          <p className='news-info'>Tin tức 27 , Tháng 6 , 2024| Admin</p>
          <h3 className='news-title'>Điều trị tim mạch</h3>
          <p>Hãy liên hệ với chúng tôi . Bệnh viện chúng tui sẽ tư vấn và lắng nghe bạn tận tâm</p>
          </div>

          <div className='news-content'>
          <img src={anh11} className='news-img'></img>
          <p className='news-info'>Tin tức 27 , Tháng 6 , 2024| Admin</p>
          <h3 className='news-title'>Điều trị loãng xương</h3>
          <p>Hãy liên hệ với chúng tôi . Bệnh viện chúng tui sẽ tư vấn và lắng nghe bạn tận tâm</p>
          </div>

          <div className='news-content'>
          <img src={anh12} className='news-img'></img>
          <p className='news-info'>Tin tức 27 , Tháng 6 , 2024| Admin</p>
          <h3 className='news-title'>Điều trị viêm xoang</h3>
          <p>Hãy liên hệ với chúng tôi . Bệnh viện chúng tui sẽ tư vấn và lắng nghe bạn tận tâm</p>
          </div>
      </div>
   </div>
   </>
  )
}

export default Main