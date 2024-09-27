import React from 'react';
import { Metadata } from 'next';
import './styles.sass';
import { SmallBanner } from '@shared-components/Banner/SmallBanner';
import Link from 'next/link';
import { LoginForm } from '../../shared-components/LoginForm';

export const metadata: Metadata = {
    title: 'Hỗ trợ'
};
export default function page() {
    return (
        <section className='support'>
            <SmallBanner title='Hỗ trợ' />
            <div className='support-board'>
                <p>Thông báo: Chỉ có thành viên đã đăng ký dịch vụ Smart Loyalty mới có thể xem Nội dung “Hướng dẫn sử dụng”. Trân trọng!</p>
                <div className='support-content'>
                    <div className='support-item'>
                        <p>Nếu bạn là thành viên khách hàng của chúng tôi. Hãy đăng nhập bằng tài khoản. *</p>
                        <h3>Thông tin đăng nhập của bạn</h3>
                        <LoginForm
                            first_label='Username or Email Address'
                            second_label='Password'
                            checkbox_label='Remember me'
                            button_label='LOGIN'
                        />
                        <div className='navigate-box'>
                            <p>Bạn chưa có tài khoản?<Link href='/register'> Đăng ký ngay {'>>'}</Link></p>
                            <Link href='/password-reset'>Quên mật khẩu?</Link>
                        </div>

                    </div>
                    <div className='support-item'>
                        <h3>Hỗ trợ</h3>
                        <Link href='to'>Hotline: 0983 399 866
                            Email: info@smartloyalty.vn</Link>
                    </div>
                    <div className='support-item'>

                        <h3>Thời gian làm việc</h3>
                        <Link href=''>Từ thứ Hai – thứ Sáu: 9h – 18h
                            (GMT +7)</Link>
                    </div>

                </div>
            </div>
        </section>
    )
};

