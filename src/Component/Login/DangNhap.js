import React from 'react'
import '../../asset/css/DangNhap.css'
import login from '../../asset/image/login.png'

function DangNhap() {
  return (
    <>
     <div className="login-container">
            <div className="login-left-section">
                <img src={login} alt="Welcome" />
                <h2>Chào mừng đến sổ khám bệnh</h2>
            </div>
            <div className="login-right-section">
                <h2>Đăng Nhập</h2>
                <form>
                    <input type="text" id="cccd" name="cccd" required placeholder='CCCD'/>
                    <input type="password" id="password" name="password" required placeholder='Mật khẩu' />
                    <button type="submit">Đăng Nhập</button>
                    <p><a href="#">Bạn Quên Mật Khẩu?</a></p>
                </form>
            </div>
        </div>
    </>
  )
}

export default DangNhap