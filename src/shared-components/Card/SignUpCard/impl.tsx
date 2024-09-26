import React from 'react';
import './styles.sass';
import { Button } from '@shared-components/Button';

export function SignUpCard() {
    return (
        <div className='card'>
            <h4>Đăng ký tư vấn miễn phí</h4>
            <form>
                <input
                    type="text"
                    id="name"
                    placeholder='Họ và tên (*)'
                />
                <input
                    type="mail"
                    id="email"
                    placeholder='Email (*)'
                />
                <input
                    type="number"
                    id="phone"
                    placeholder='Số điện thoại (*)'
                />
                <select id="role" name="role" defaultValue="" >
                    <option value="" disabled hidden>Vai trò/Chức vụ</option>
                    <option value="founder">Founder/CEO</option>
                    <option value="president">Giám đốc</option>
                    <option value="head">Trưởng phòng</option>
                    <option value="staff">Nhân viên</option>
                    <option value="specialist">Quản lý/Chuyên viên IT</option>
                    <option value="other">Khác</option>
                </select>
                <input
                    type="text"
                    id="corp"
                    placeholder='Tên công ty, đơn vị...'
                />
                <Button>ĐĂNG KÝ TƯ VẤN</Button>
            </form>


        </div >
    );
};
