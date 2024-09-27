
import { Button } from '@shared-components';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import './styles.sass';



export const metadata: Metadata = {
    title: 'Password Reset'
};


export default function PasswordReset() {
    return (
        <div>
            <h1>Password Reset</h1>
            <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
            <form className='login-form'>
                <div className='form-group'>
                    <label htmlFor='username'>Username or Email Address *</label>
                    <input
                        type='text'
                        id='username'
                        required
                        style={{ width: '100%', lineHeight: '1.5rem' }}

                    />
                </div>
                <Button>RESET PASSWORD</Button>
            </form>
            <div className='navigate-box'>
                <p>Bạn đã có tài khoản?<Link href='/ho-tro'> Đăng nhập {'>>'}</Link></p>
                <p>Bạn chưa có tài khoản?<Link href='/registry'> Đăng ký ngay {'>>'}</Link></p>
            </div>
        </div>


    );
};
