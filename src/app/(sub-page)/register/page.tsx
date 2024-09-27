
import { LoginForm } from '@shared-components/LoginForm';
import { Metadata } from 'next'
import Link from 'next/link';
import React from 'react'



export const metadata: Metadata = {
    title: 'Tạo tài khoản'
}


export default function Instruction() {
    return (
        <div>

            <h1>Tạo tài khoản</h1>
            <LoginForm
                first_label='Email'
                second_label='Password'
                checkbox_label='I have read and accept the privacy policy and allow "SMART LOYALTY" to collect and store the data I submit through this form.'
                button_label='TẠO TÀI KHOẢN'
            />
            <div className='navigate-box'>
                <p>Bạn chưa có tài khoản?<Link href='/ho-tro'>Đăng nhập {'>>'}</Link></p>
                <Link href='/password-reset'>Quên mật khẩu?</Link>
            </div>
        </div>


    );
};
