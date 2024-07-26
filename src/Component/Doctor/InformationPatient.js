import React from 'react'
import logo from '../../asset/image/logo.png'
import '../../asset/css/InformationPatient.css'

function InformationPatient() {
  return (
    <>
    <div className='patient-info'>
        <div className='profile'>
            <img src={logo} className='profile-pic'></img>
            <h2>Dreameker</h2>
        </div>
        <table className='info-table'>
            <thead>
                <tr>
                    <th>THÔNG TIN BỆNH NHÂN</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tên:</td>
                </tr>
                <tr>
                    <td>Ngày sinh:</td>
                </tr>
                <tr>
                    <td>Giới tính:</td>
                </tr>
                <tr>
                    <td>Số CCCD:</td>
                </tr>
                <tr>
                    <td>Số bảo hiểm:</td>
                </tr>
                <tr>
                    <td>Số điện thoại:</td>
                </tr>
                <tr>
                    <td>Địa chỉ </td>
                </tr>
            </tbody>
        </table>
        <div className='actions'>
            <button className='actions-btn'> <a href='#'></a>Thay đổi thông tin</button>
            <button className='actions-btn'> <a href='#'></a>Lịch sử khám bệnh</button>
            <button className='actions-btn'> <a href='#'></a> Thay đổi mật khẩu</button>
        </div>
    </div>
    </>
  )
}

export default InformationPatient