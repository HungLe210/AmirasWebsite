import React from 'react';
import './styles.sass';
import { Button } from '@shared-components/Button';

const SignUpCard = () => {
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
                <input
                    type="text"
                    id="name"
                    placeholder=''
                />
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

export default SignUpCard;