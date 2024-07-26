import React from 'react'
import login from '../../asset/image/login.png'
import '../../asset/css/DangKy.css'

function DangKy() {
  return (
    <div className='register-container'>
        <div className='register-left-section'>
            <img src={login}></img>
            <h2>Chào mừng đến với sổ khám bệnh</h2>
        </div>
        <div className='register-right-section'>
            <h2>Đăng ký</h2>
            <form>
                <label htmlFor='cccd'>Vui lòng nhập số CCCD</label>
                <input type='text' id='cccd' name='cccc' placeholder='Vui lòng nhập số CCCD' required></input>

                <label htmlFor='username'>Vui lòng nhập tên người dùng</label>
                <input type='text' id='username' name='username' placeholder='Vui lòng nhập tên người dùng' required></input>

                <label htmlFor='password'>Vui lòng nhập mật khẩu</label>
                <input type='password' id='password' name='password' placeholder='Vui lòng nhập mật khẩu' required></input>

                <label htmlFor='confirmPassword'>Vui lòng nhập lại mật khẩu</label>
                <input type='password' id='confirmPassword' name='confirmPassword' placeholder='Vui lòng nhập đúng mật khẩu' required></input>

                <label htmlFor='dob'>Ngày sinh</label>
                <input type='date' id='dob' name='dob' placeholder='Vui lòng nhập ngày sinh' required></input>

                <label>Chọn giới tính</label>
                <div className='register-gender-section'>
                  <input type='radio' id='male' name='gender' value="male"></input>
                  <label htmlFor='male'>Nam</label>
                  <input type='radio' id='female' name='gender' value="female"></input>
                  <label htmlFor='female'>Nữ</label>
                </div>

                <label htmlFor='phone'>Vui lòng nhập số điện thoại</label>
                <input type='number' id='phone' name='phone' placeholder='Vui lòng nhập số điện thoại' required></input>

                <label htmlFor='insurance'>Vui lòng nhập số bảo hiểm</label>
                <input type='number' id='insurance' name='insurance' placeholder='Vui lòng nhập số bảo hiểm' required></input>

                <button type='submit'>Đăng ký</button>
                <p><a href='#'>Đăng nhập</a>OR<a href='#'>Quên mật khẩu</a></p>
           </form>
        </div>
    </div>
  )
}

export default DangKy