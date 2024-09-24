import React from 'react';
import { Button } from '@shared-components';
import { Metadata } from 'next';
import './styles.sass';

export const metadata: Metadata = {
    title: 'Hỗ trợ'
}
const page = () => {
    return (
        <section className='support'>
            <div className='service-header'>
                <div className='service-header-content'>
                    <h1>Hỗ trợ</h1>
                </div>
            </div>

            <section className='support'>
                <div className='support-board'>
                    <p>Thông báo: Chỉ có thành viên đã đăng ký dịch vụ Smart Loyalty mới có thể xem Nội dung “Hướng dẫn sử dụng”. Trân trọng!</p>
                    <div className='support-content'>
                        <div className='support-item'>
                            <p>Nếu bạn là thành viên khách hàng của chúng tôi. Hãy đăng nhập bằng tài khoản. *</p>
                            <h3>Thông tin đăng nhập của bạn</h3>
                        </div>
                        <div className='support-item'>
                            <h3>Hỗ trợ</h3>
                            <p>Hotline: 0983 399 866
                                Email: info@smartloyalty.vn</p>
                        </div>
                        <div className='support-item'>

                            <h3>Thời gian làm việc</h3>
                            <p>Từ thứ Hai – thứ Sáu: 9h – 18h
                                (GMT +7)</p>
                        </div>

                    </div>
                </div>
            </section>
        </section>
    )
}

export default page