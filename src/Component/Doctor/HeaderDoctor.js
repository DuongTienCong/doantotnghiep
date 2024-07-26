import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDroplet, faHeart , faCalendar , faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import background from '../../asset/image/background.png'
import '../../asset/css/HeaderDoctor.css'

function HeaderDoctor() {
  return (
    <>
     <div className='doctor'>
     <div className='dasboard-doctor'>
        <div className='header-doctor'>
            <input type='text' placeholder='Tìm bệnh nhân , bác sĩ'></input>
        </div>
        <div className='card'>
        <div className='card-blood'>
            <div className='icon-doctor'><FontAwesomeIcon icon={faDroplet}></FontAwesomeIcon></div>
            <div className='info-doctor'>
                <h3>Nhóm máu</h3>
                <p>B+</p>
            </div>
        </div>
        <div className='card-heart-rate'>
            <div className='icon-doctor'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></div>
            <div className='info-doctor'>
                <h3>Nhịp tim</h3>
                <p>122</p>
            </div>
        </div>
        <div className='card-total-appointments'>
            <div className='icon-doctor'><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon></div>
            <div className='info-doctor'>
                <h3>Tổng lịch hẹn</h3>
                <p>123</p>
            </div>
        </div>
        </div>
    </div>
    <div className='chart-section'>
        <h3>Sơ đồ khám lại của bệnh nhân</h3>
        <img src={background}></img>
    </div>
    <div className='history-section'>
        <h3>Lịch sử tạo sổ hỗ trợ</h3>
        <ul>
          <li>Bệnh Nhân : Trần Minh A - 20h-22/12/2024 - Hoàn Thành</li>
          <li>Bệnh Nhân : Trần Minh A - 20h-22/12/2024 - Hoàn Thành</li>
          <li>Bệnh Nhân : Trần Minh A - 20h-22/12/2024 - Hoàn Thành</li>
        </ul>
    </div>
     </div>
    </>
  )
}

export default HeaderDoctor